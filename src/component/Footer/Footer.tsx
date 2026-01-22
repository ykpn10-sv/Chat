import { chakra, Container, Flex, Link } from '@chakra-ui/react'
import { Navigate } from '@src/component/Navigate/Navigate'

export const Footer = () => {
  return (
    <chakra.footer py={4} bgColor={'teal.700'} color={'white'}>
      <Container maxW={'container.lg'}>
        <Flex flexDirection={{ base: "column" , md: "row"}} gap={4} justify={'center'} align={'center'} wrap={'wrap'}>
          <Navigate href={(path) => path.$url()}>
            <Link lineHeight={1}>トップページ</Link>
          </Navigate>
          <Navigate href={(path) => path.signin.$url()}>
            <Link lineHeight={1}>サインイン</Link>
          </Navigate>
          <Navigate href={(path) => path.signup.$url()}>
            <Link lineHeight={1}>サインアップ</Link>
          </Navigate>
          <Navigate href={(path) => path.chat.$url()}>
            <Link lineHeight={1}>チャット</Link>
          </Navigate>
        </Flex>
      </Container>
    </chakra.footer>
  )
}