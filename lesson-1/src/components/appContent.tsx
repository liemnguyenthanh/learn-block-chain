import { AppContext } from "@/contexts/appContext"
import { colorText } from "@/styles/colors"
import { handleGetBalance, handleGetChain } from "@/web3"
import { Box, Container, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"

interface IInfoAccount {
  balance: string
  chainId: string
}

const initData = {
  balance: '',
  chainId: '',
}

const AppContent = () => {
  const [state, setState] = useState<IInfoAccount>(initData)
  const { data } = useContext(AppContext)

  useEffect(() => {
    if (data.currentAccount) {
      const getInit = async (account: string) => {
        const balance = await handleGetBalance(account)
        const chainId = await handleGetChain()
        setState({
          balance, chainId
        })
      }

      getInit(data.currentAccount)
    } else setState(initData)
  }, [data.currentAccount])

  return (
    <Container maxWidth="xl" >
      {
        data.currentAccount ?
          <Box p={2}>
            {Object.keys(state).map((item, index) => (
              <Box color={colorText} key={index}>
                <Box fontSize={20} fontWeight={700} color={'#ffffff'}>{item}:</Box>
                {state[item as keyof IInfoAccount]}
              </Box>
            ))}
          </Box> :
          <Typography color={'#ffffff'} textAlign={'center'} mt={2} fontSize={24}>Please, Login...</Typography>
      }

    </Container>
  )
}

export default AppContent
