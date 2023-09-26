import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import prisma  from "@/app/lib/prisma"

// ログインユーザーの取得
const getCurrentUser = async () => {
  try {
    // セッションを取得
    const session = await getServerSession(authOptions)

    // メールアドレスがない場合はnullを返す
    if (!session?.user?.email) { return null }
    

    // ユーザーを取得
    const response = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    })

    // ユーザーがいない場合はnullを返す
    if (!response) {
      return null
    }
    return response
  } catch (error) {
    return null
  }
}

export default getCurrentUser