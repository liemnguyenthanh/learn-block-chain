import AppContent from "@/components/appContent";
import AppProvider from "@/contexts/appContext";
import Header from "@/layouts/Header";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <AppProvider>
      <Box bgcolor={'#000000'}>
        <Header />
        <AppContent/>
      </Box>
    </AppProvider>
  )
}
