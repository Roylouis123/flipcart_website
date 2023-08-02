import { Box } from "@mui/material";
import Header from "./Components/header/Header";
import Home from "./Components/home/home";
import Navbar from "./Components/home/navbar";


function App() {
  return (
    
    <>
    <Header/>
    <Box style={{marginTop:"55px"}}>
    <Home />
    </Box>
    
    </>
  );
}

export default App;
