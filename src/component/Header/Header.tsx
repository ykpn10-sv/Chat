import {
  Avatar,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useToast,
} from '@chakra-ui/react'

import { useAuthContext } from '@src/feature/auth/provider/AuthProvider'
import { FirebaseError } from 'firebase/app'
import { getAuth, signOut } from 'firebase/auth'
import { Navigate } from '@src/component/Navigate/Navigate'
import { useRouter } from '@src/hooks/useRouter/useRouter'



// 認証データを取得
export const Header = () => {

    // ログイン中のユーザーを取得
    const { user } = useAuthContext()
    // 画面に出てくる通知（トースト機能）
    const toast = useToast()
    // 画面遷移
    const { push } = useRouter()

    // サインアウトボタン押下の処理
    const handleSignOut = async () => {

        try {

            // firebase authの認証
            const auth = getAuth()
            // ログアウトをする
            await signOut(auth)

            toast({
                title: 'ログアウトしました。',
                status: 'success',
                position: 'top',
            })

            // ログアウト後、サインインページへ
            push((path) => path.signin.$url())
        } catch (e) {
            // エラーが出たらコンソールログに表示
            if (e instanceof FirebaseError) {
                console.log(e)
            }
        }
    }
    
  return (
    <chakra.header py={4} bgColor={'teal.700'}>
      <Container maxW={'container.lg'}>
        <Flex>
        <Navigate href={(path) => path.$url()}>
          <chakra.a
            _hover={{
               opacity: 0.8,
            }}
          >
            <Heading color={'white'} fontSize="lg">Firebase Realtime Chat</Heading>
          </chakra.a>
        </Navigate> 
          <Spacer aria-hidden />
          {user ? (
            <Menu>
              <MenuButton>
                <Avatar flexShrink={0} width={10} height={10} />
              </MenuButton>
              <MenuList py={0}>
                <MenuItem onClick={handleSignOut}>サインアウト</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Navigate href={(path) => path.signin.$url()}>
              <Button as={'a'} colorScheme={'teal'}>
                サインイン
              </Button>
            </Navigate>
          )}
        </Flex>
      </Container>
    </chakra.header>
  )
}