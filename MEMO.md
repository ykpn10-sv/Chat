# 開発中で直面した課題と解決策

<br />

## pnpmのインストール後のエラー原因
pnpm v10 からインストール後のスクリプト (postinstall) をデフォルトで実行しなくなったので、インストール後にビルドする必要があるライブラリなどで不具合が発生することがある。  
以下のコマンドを実行することで、拒否されたライブラリから選択してスクリプトを実行できる。  
### 解決策
```bash
pnpm approve-builds
```
[参考サイト](https://zenn.dev/uttk/scraps/af1a3589784268)

<br />

## Next.jsのバージョンによってルーティング設定に違いがある
### Pages Router: シンプルなファイルベースのルーティング
Pages Router は、Next.js が誕生した当初から提供されているルーティングシステムで、pages ディレクトリを使用してルートを定義します。ファイル名がそのまま URL パスに対応し、直感的な構造で利用できる特徴があります。

### App Router: 次世代の柔軟なルーティング
Next.js 13 で導入された App Router は、app ディレクトリを使用してルーティングを行います。この新しいルーティングシステムは、従来の Pages Router よりもモジュール化されており、React Server Components などの最新の機能をサポートしています。

<table border=1>
    <tr>
        <td>ルーティング</td>
        <td>規模</td>
        <td>内容</td>
    </tr>
    <tr>
        <td>Pages Router</td>
        <td>シンプル</td>
        <td>学習コストを抑えたい、あるいは素早くプロトタイプを作成したい</td>
    </tr>
    <tr>
        <td>App Router</td>
        <td>複雑</td>
        <td>高い柔軟性やパフォーマンス、将来的な拡張性を重視</td>
    </tr>
</table>

[参考サイト](https://tech.nri-net.com/entry/page_router_and_app_router)

<br />

## Linkでaタグの使用でエラーになった
aタグを子要素に含むとエラーになってしまう。Linkコンポーネントがa要素に置き替えられるため、入れ子になるため。  

```bash
例
<a><a>テスト</a></a>
```
### 解決策
legacyBehaviorプロパティを加える  
第2に、すでにアプリケーションがつくられている場合、aタグをすべて消そうとすると問題が起きるかもしれません。そのために用意されたのがlegacyBehaviorプロパティです。Linkコンポーネントに含めたa要素の扱いをこれまでと同じにしてくれます。

```bash
<Link href="/about" legacyBehavior>
```

[参考サイト](https://qiita.com/FumioNonaka/items/0e97dca13528fb3366a0)







