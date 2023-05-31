import { AppContext } from '@/contexts/appContext'
import { colorText } from '@/styles/colors'
import { connectWallet, hasWallet } from '@/web3'
import { Alert, Box, Button, Typography, styled } from '@mui/material'
import { useContext, useState } from 'react'

const CustomButton = styled(Button)`
  background-color: #d9552b;
  color: #ccc;
  padding-inline: 20px;
  text-transform: initial;
  border: 1px solid #000000;
  border-radius: 12px;

  &:hover {
    color: #d9552b;
    border: 1px solid #d9552b;
    background-color: #000000;
  }
`

const ConnectWallet = () => {
  const [error, setError] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const { data, updateData } = useContext(AppContext)
  const handleConnect = async () => {
    setError('')

    if (!hasWallet()) return setError('Please Install MetaMask Extension!!')

    setIsConnected(true)
    const { data, error } = await connectWallet()

    if (data?.accounts?.length > 0) updateData({ currentAccount: data.accounts[0] })

    if (error) setError(error)

    setIsConnected(false)
  }

  const handleDisconnect = () => {
    updateData({ currentAccount: null })
  }

  if (data.currentAccount) return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <Typography color={colorText}>{data.currentAccount}</Typography>
      <CustomButton onClick={handleDisconnect}>
        Disconnect
      </CustomButton>
    </Box>
  )

  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      {error && <Alert severity="warning">{error}</Alert>}
      <CustomButton onClick={handleConnect} disabled={isConnected}>
        {
          isConnected ? 'connecting' : 'Connect'
        }
      </CustomButton>
    </Box>
  )
}

export default ConnectWallet