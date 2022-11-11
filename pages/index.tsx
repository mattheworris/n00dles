import {Box, calc, Center, Spacer, Stack } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Disconnected from '../components/Disconnected'
import { useWallet } from '@solana/wallet-adapter-react'
import Connected from '../components/Connected'

const Home: NextPage = () => {
    const { connected } = useWallet()

    return (
        <div className={styles.container}>
            <Head>
                <title>N00dles</title>
                <meta name="The NFT Collection of N00dles" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box
                w="full"
                h="calc=(100vh)"
                bgImage={connected ? "" : "url(/home-background.svg)"}
                backgroundPosition="center"
            >
                <Stack w="full" h="calc(100vh)" justify="center">
                    <NavBar />

                    <Spacer />
                    <Center>{connected ? <Connected /> : <Disconnected />}</Center>
                    <Spacer />

                    <Center>
                        <Box marginBottom={4} color="white">
                            <a
                                href="https://twitter.com/mattheworris"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                built by @mattheworris
                            </a>
                        </Box>
                    </Center>
                </Stack>
            </Box>
        </div>
    )
}

export default Home