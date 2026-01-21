import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Spacer,
  useToast,
} from '@chakra-ui/react'
import { FormEvent, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { useRouter } from '@src/hooks/useRouter/useRouter'

export const Page = () => {
    // 入力されたメールアドレスをreactで管理
    const [email, setEmail] = useState<string>('')
    // 入力されたパスワードをreactで管理
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    // 画面に出てくる通知（トースト機能）
    const toast = useToast()
    // 画面遷移するためのルーターを用意
    const { push } = useRouter()
    

    // ボタンが押されたら
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        // データ読み込み時にLoading画面を出す
        setIsLoading(true)
        e.preventDefault()

        try {
            // firebase authenticationに接続
            const auth = getAuth()
            // 入力されたメールアドレス、パスワードをfirebase authenticationに登録
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )

            // 確認メールを送る処理
            await sendEmailVerification(userCredential.user)
            setEmail('')
            setPassword('')
            toast({
                title: '確認メールを送信しました。',
                status: 'success',
                position: 'top',
            })

            // サインアップ後、チャットページへ
            push((path) => path.chat.$url())
            
        } catch (e) {
            toast({
                title: 'エラーが発生しました。',
                status: 'error',
                position: 'top',
            })
            if (e instanceof FirebaseError) {
                console.log(e)
            }
            } finally {
                // データ読み込み終了
                setIsLoading(false)
            }
        }
    

  return (
    <Container py={14}>
      <Heading>サインアップ</Heading>
      <chakra.form onSubmit={handleSubmit}>
        <Spacer height={8} aria-hidden />
        <Grid gap={4}>
          <Box display={'contents'}>
            <FormControl>
              <FormLabel>メールアドレス</FormLabel>
              <Input
                type={'email'}
                name={'email'}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>パスワード</FormLabel>
              <Input
                type={'password'}
                name={'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </FormControl>
          </Box>
        </Grid>
        <Spacer height={4} aria-hidden />
        <Center>
            <Button type={'submit'} isLoading={isLoading}>
                アカウントを作成
            </Button>
        </Center>
      </chakra.form>
    </Container>
  )

}

export default Page