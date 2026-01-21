import type { NextPage } from "next";
import { Heading } from '@chakra-ui/react'
import { AuthGuard } from '@src/feature/auth/component/AuthGuard/AuthGuard'


const Page: NextPage = () => {

  return <Heading>Chakra UI</Heading>
  
};

export default Page;
