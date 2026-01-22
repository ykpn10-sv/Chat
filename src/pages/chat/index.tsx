import {
    Avatar,
    Box,
    Button,
    chakra,
    Container,
    Flex,
    Heading,
    Input,
    Spacer,
    Text,
    Center,
} from '@chakra-ui/react'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { getDatabase, push, ref, onChildAdded } from 'firebase/database'
import { FirebaseError } from 'firebase/app'
import { AuthGuard } from '@src/feature/auth/component/AuthGuard/AuthGuard'

// テスト用
// const _message = '確認用メッセージです。'
// const _messages = [...Array(10)].map((_, i) => _message.repeat(i + 1))

type MessageProps = {
  message: string
}

const Message = ({ message }: MessageProps) => {
  return (
    <Flex alignItems={'start'}>
      <Avatar />
      <Box ml={2}>
        <Text bgColor={'gray.200'} rounded={'md'} px={2} py={1}>
          {message}
        </Text>
      </Box>
    </Flex>
  )
}

export const Page = () => {
    const messagesElementRef = useRef<HTMLDivElement | null>(null)
    // 入力されたメッセージをreactで管理
    const [message, setMessage] = useState<string>('')
    // ボタンが押下されたときの処理
    const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
        // ボタン押下デフォルトのイベント動作をキャンセルする
        e.preventDefault()

        try {
            // firebaseに接続
            const db = getDatabase()
            const dbRef = ref(db, 'chat')
            // 新規データを保存
            await push(dbRef, {
                message,
        })
            // 入力欄を空にする
            setMessage('')
        } catch (e) {
            // エラーがあればログに出す
            if (e instanceof FirebaseError) {
                console.log(e)
            }
        }
    }

    const [chats, setChats] = useState<{ message: string }[]>([])

    useEffect(() => {
        try {
            // firebaseに接続
            const db = getDatabase()
            // データベースに保存しているchatを用意
            const dbRef = ref(db, 'chat')
            
            // 新しいチャットが追加されたら
            return onChildAdded(dbRef, (snapshot) => {
                // データを取得
                const message = String(snapshot.val()['message'] ?? '')
                // チャットに表示
                setChats((prev) => [...prev, { message }])
        })
        } catch (e) {
        if (e instanceof FirebaseError) {
            console.error(e)
        }
        return
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // メッセージを送信するたびに最新のチャットを表示する
    useEffect(() => {
        messagesElementRef.current?.scrollTo({
        top: messagesElementRef.current.scrollHeight,
        })
    }, [chats])

  return (
    // 認証状態を確認
    <AuthGuard>
        <Container
            py={14}
            flex={1}
            display={'flex'}
            flexDirection={'column'}
            minHeight={0}
        >
            <Center>
                <Heading mb={8} fontSize={30} color="gray.600">チャット</Heading>
            </Center>
            <Spacer flex={'none'} height={4} aria-hidden />
            <Flex
            flexDirection={'column'}
            overflowY={'auto'}
            gap={2}
            height={400}
            ref={messagesElementRef}
            >
            {chats.map((chat, index) => (
                <Message message={chat.message} key={`ChatMessage_${index}`} />
            ))}
            </Flex>
            <Spacer aria-hidden />
            <Spacer height={2} aria-hidden flex={'none'} />
            <chakra.form display={'flex'} gap={2} onSubmit={handleSendMessage}>
                <Input value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button type={'submit'}>送信</Button>
            </chakra.form>
        </Container>
    </AuthGuard>
  )
}

export default Page