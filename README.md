# 目的
Next.jsやFirebase Realtime Databaseを使った簡単なチャットアプリを作成し、データの連携の流れや仕組みを理解すること。

# 使用技術
- TypeScript
- Next.js 
- Firebase 
- Chakra UI 

# 開発環境
- Node.js
- pnpm
- IntelliJ IDEA

# 機能
- Firebase Authenticationを使用したアカウントの作成  
- Firebase Authenticationを使用した認証  
- Firebase Realtime Databaseを使用したチャットの送信  
- Firebase Realtime Databaseを使用したチャットの受信  


# 開発手順
### 1. Next.jsのセットアップ  
```bash
pnpm create next-app --typescript
```


### 2. Chakra UIのセットアップ
```bash
pnpm add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```









pnpm v10 からインストール後のスクリプト (postinstall) をデフォルトで実行しなくなったので、インストール後にビルドする必要があるライブラリなどで不具合が発生することがある。  
以下のコマンドを実行することで、拒否されたライブラリから選択してスクリプトを実行できる。  
```bash
pnpm approve-builds
```

## PowerShellコマンド
### ファイル/ディレクトリ追加
```bash
New-Ttem -ItemType Faile 
```
※Linuxでいうtouchのこと

### ファイル/ディレクトリ削除
```bash
remove-item -recurse -force ディレクトリ名
```


<br />


<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
