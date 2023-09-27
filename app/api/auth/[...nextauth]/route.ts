import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import prisma from "@/app/lib/prisma";

// NextAuthの設定
export const authOptions: NextAuthOptions = {
  // Prismaを使うための設定
  adapter: PrismaAdapter(prisma),
  // 認証プロバイダーの設定
  providers: [
    // Google認証
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // メールアドレスとパスワードによる認証
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) { 
        // メールアドレスとパスワードがない場合はエラー
        if (!credentials?.email || !credentials?.password) {
          throw new Error('メールアドレスとパスワードを入力してください')
        }
        // ユーザーを取得
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        // ユーザーがいない場合はエラー
        if (!user|| !user?.hashedPassword) {
          throw new Error('ユーザーが見つかりませんでした')
        }

        // パスワードが一致しない場合はエラー
        const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword)
        if (!isCorrectPassword) {
          throw new Error('パスワードが一致しません')
        }

        return user
      }
    })
  ],
  // セッションの設定
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30日
  },
  secret: process.env.SECRET,
}

const handler = NextAuth(authOptions)
export {handler as Get, handler as Post}