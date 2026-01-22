import {
  Button,
  Flex,
  Heading,
  Input,
  Center,
  Container,
  Stack,
  HStack,
  Box,
  Spacer,
  Image,
  Text,
  Avatar,
  SimpleGrid,
  VStack,







  
} from '@chakra-ui/react'
import type { NextPage } from "next";
import { Navigate } from '@src/component/Navigate/Navigate'

// import { Heading, Center, Container } from '@chakra-ui/react'
// import { AuthGuard } from '@src/feature/auth/component/AuthGuard/AuthGuard'


const Page: NextPage = () => {

  return (
    
    // <Container py={14}>
    //   <Center>
    //       <Heading>Realtime Chat</Heading>
    //   </Center>
    // </Container>   


    //  <Flex height="100vh" alignItems="center" justifyContent="center">
    //     <Flex direction="column" background="gray.100" padding={200} rounded={100}>
    //       <Heading mb={6}>Realtime Chat</Heading>
      
    //       <Button colorScheme="teal">Log in</Button>
    

    //   </Flex>
    // </Flex>

    <Container maxW="container.xl" py={14}>

      <Center>
        <Heading mb={8} fontSize={50} color="gray.600">Realtime Chat</Heading>
      </Center>
      <Center>
        <Text mb={100} color="gray.500" fontSize="lg">
          Firebase × Next.js × Chakra UIを使用したチャットアプリ
        </Text>
      </Center>

      <SimpleGrid mb={150} columns={{ base: 1, md: 3 }} spacing={6}>

        <Box bg="white" boxShadow="xl" rounded="xl" p="6" overflow="hidden">
          <Stack>
            <Heading color="gray.700" fontSize="lg" fontFamily="body">
              ⚡リアルタイム通信
            </Heading>
            <Text color="gray.500" fontSize="sm">
              更新されたチャットはすぐ画面に反映されます。
            </Text>
          </Stack>
        </Box>

        <Box bg="white" boxShadow="xl" rounded="xl" p="6" overflow="hidden">
          <Stack>
            <Heading color="gray.700" fontSize="lg" fontFamily="body">
              🗝️認証機能
            </Heading>
            <Text color="gray.500" fontSize="sm">
              サインイン・サインアウトに対応し、安全にチャットができます。
            </Text>
          </Stack>
        </Box>

        <Box bg="white" boxShadow="xl" rounded="xl" p="6" overflow="hidden">
          <Stack>
            <Heading color="gray.700" fontSize="lg" fontFamily="body">
              ✅シンプル操作
            </Heading>
            <Text color="gray.500" fontSize="sm">
              サインイン後、すぐにチャットを始められます。
            </Text>
          </Stack>
        </Box>

      </SimpleGrid>

      <Center mt={10}>
        <Stack spacing={4} align="center">
          <Text color="gray.500" fontSize="lg">
            はじめての方はこちら
          </Text>
          <Navigate href={(path) => path.signup.$url()}>
            <Button colorScheme="teal" size="lg">アカウント登録</Button>
          </Navigate>   
        </Stack>
      </Center>







            
            
           
    </Container>
      

  )
};

export default Page;
