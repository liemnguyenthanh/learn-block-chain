export const hasWallet = () => ((window as any).ethereum !== undefined)


export const connectWallet = async () => {
  const ethereum = (window as any).ethereum
  let data: any = null
  let error: any = null

  try {
    if (ethereum) {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      data = {
        accounts,
      }
    }
  } catch (err: any) {
    // Handle error connecting to MetaMask
    error = err.message
  }

  return { data, error }
}

export const disconnectWallet = async () => {
  const ethereum = (window as any).ethereum
  try {
    if (ethereum) {
      await ethereum.disconnect();
      console.log('Logged out from MetaMask');
    } else {
      console.error('MetaMask not detected');
    }
  } catch (error) {
    console.error('Error disconnecting from MetaMask:', error);
  }
};


export const handleGetBalance = async (account: string) => {
  const ethereum = (window as any).ethereum
  try {
    const balance = await ethereum.request({
      method: 'eth_getBalance',
      params: [account, 'latest'],
    });
    return balance
  } catch (error) {
    console.error(error);
  }
};

export const handleGetChain = async () => {
  const ethereum = (window as any).ethereum
  try {
    const chainId = await ethereum.request({
      method: 'eth_chainId',
    });

    return chainId
  } catch (error) {
    console.error(error);
  }
};
