# Chakra UI デザイン・実装メモ
開発中に参考にしたサイト   
今後、Chakra UIを使用する機会があった際に見返す用でまとめています。

<br />

### Chakra UIとは
UI ライブラリの一つでコンポーネントを利用して効率よくユーザインターフェイスを構築することができる。Chakra UI には 1 つのコンポーネントから作成できる Button コンポーネントから複数のコンポーネントを組み合わせて作成できる Modal コンポーネントまで用途毎にさまざまなコンポーネントが提供されている。　　

コンポーネント一覧は[こちら](https://chakra-ui.com/docs/components/concepts/overview)

<br />

### 基本的な使い方

```bash
例
import { Box, Button } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Button>ボタン</Button>
    </Box>
  );
}

export default App;
```
[参考サイト](https://reffect.co.jp/react/chakra-ui#Button)

<br />

### その他
レイアウトは下記のサイトを参考に作成
- [【Chakura UI】テンプレートを使っていい感じのデザインにしてみた](https://qiita.com/AK_React/items/2074b6e284be41c3dcdc)

- [Next.js + Chakra UI で BlogCard コンポーネント作成！](https://brightful.jp/blog/programming/nextjs-chakraui-1/)

- [Chakra公式](https://chakra-ui.com/docs/components/concepts/overview)