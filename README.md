# next-auth-template
NextAuthを使った認証機能を実装。

GoogleのOAuth認証。

テンプレート化されているので他プロジェクトに流用が可能。

CSSはtailwindCSSを使用。

バリデーションにはzodを使用。

urlはこちら
https : //github.com/massu-159/next-auth-template


## 目次
1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install

または

yarn
```

### 1-2. アプリケーション実行

```
npm run dev

または

yarn dev
```

DBはDockerでPostgreSQLの環境を構築。

## 2. アプリケーションの仕様

### 2-1. 仕様
- 認証
  - サインアップ
  - ログイン
  - ログアウト
  - ユーザー情報更新

### 2-2. 構成技術
  - axios: ^1.5.0
  - bcrypt: ^5.1.1
  - date-fns: ^2.30.0
  - encoding: ^0.1.13

  - next: 13.5.2
  - react: 18.2.0
  - typescript: 5.2.2
  - eslint: 8.50.0

  - next-auth: ^4.23.1
  - @next-auth/prisma-adapter: ^1.0.7

  - react-hook-form: ^7.46.2
  - @hookform/resolvers: ^3.3.1
  - zod: ^3.22.2
  - zustand: ^4.4.1
  - prisma: ^5.3.1
  - @prisma/client: ^5.3.1
  - next-cloudinary: ^4.22.0

  - react-hot-toast: ^2.4.1
  - react-icons: ^4.11.0
  - tailwindcss: 3.3.3
  - postcss: 8.4.30
  - autoprefixer: 10.4.16