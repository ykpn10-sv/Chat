# 目的
Next.jsやFirebase Realtime Databaseを使った簡単なチャットアプリを作成し、データの連携の流れや仕組みを理解すること。

<br />

# 使用技術
- TypeScript
- Next.js 
- Firebase 
- Chakra UI 

<br />

# 開発環境
- Node.js
- pnpm
- IntelliJ IDEA

<br />

# 機能
- Firebase Authenticationを使用したアカウントの作成  
- Firebase Authenticationを使用した認証  
- Firebase Realtime Databaseを使用したチャットの送信  
- Firebase Realtime Databaseを使用したチャットの受信  

<br />

# 開発手順  
### 開発環境の起動方法 
ブラウザで動作確認の際に使用するコマンド  
※pnpmのインストールが必要
```bash
pnpm dev
```
実行後、http://localhost:3001　にアクセスする

<br />

### 1. 環境構築（Next.js + Chakra UI） 
Next.js + TypeScriptでプロジェクトの作成、Chakra UIを導入しコンポーネントを使える状態にする

- Next.jsのセットアップ
```bash
pnpm create next-app --typescript
```
- TypeScriptのセットアップ
```bash
pnpm add -D @tsconfig/strictest
```
- chakra UIのセットアップ
```bash
pnpm add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

<br />

### 2. Firebase設定  
Firebase AuthenticationとRealtime Databaseを設定し、アプリと接続する
- Firebaseのプロジェクトを作成  
https://console.firebase.google.com にアクセスし、プロジェクトを作成

- Firebase Authenticationを有効にする
- Firebase Realtime Databaseを有効にする  

<br />

- Firebaseのインストール
```bash
yarn add firebase
```

<br />

### 3. 認証機能の実装  
サインアップ・サインイン・サインアウトを実装し、ログイン状態を管理する
- Firebase Authenticationを使って認証状態を取得
- HeaderのUIを作成し、認証状態を表示

<br />

### 4. チャット機能の実装  
メッセージ送受信の処理を行い、画面に表示されるよう実装する
- サインアップ、サインイン、サインアウト、チャット各機能の実装
- Firebase Authenticationと紐付ける
- 各ページの作成

<br />

### 5. 作成したチャットアプリのデプロイ
デプロイしたアプリはこちらで見れます：(https://fir-chat-63527.web.app/)

<br />

### その他必要なコマンド


### PowerShellコマンド
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

# 補足
- [開発中で直面した課題と解決策](MEMO.md)
- [Chakra UI参考サイト](ChakraUI_MEMO.md)

<br />

# 参考サイト
- [FirebaseとTypeScriptとNext.jsを使ってリアルタイムチャットアプリを作ろう](https://zenn.dev/hisho/books/617d8f9d6bd78b/viewer/introduction)
- [サクッと始めるウェブアプリ開発【Next.js / TypeScript】](https://zenn.dev/umi_mori/books/next-js-typescript/viewer/intro)



