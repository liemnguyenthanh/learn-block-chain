import { colorText } from '@/styles/colors'
import { Box, Typography } from '@mui/material'
import ConnectWallet from '../components/connectWallet'

const logoSrc = "https://i1.sndcdn.com/avatars-000288473023-nw5wu6-t500x500.jpg"

const Header = () => {
 
  return (
    <Box borderBottom={1} borderColor={'#ccc'} p={{ md: '10px 30px', xs: '10px 15px' }} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <Box display={'flex'} gap={1} alignItems={'center'}>
        <img src={logoSrc} alt="logo" width={50} height={50} />
        <Typography fontSize={20} fontWeight={700} color={colorText}>TLinh</Typography>
      </Box>

      <ConnectWallet />
    </Box>
  )
}

export default Header