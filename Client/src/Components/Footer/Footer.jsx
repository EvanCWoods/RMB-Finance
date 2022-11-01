import { Box } from "@mui/material";
import RMBIcon from "../../Assets/Images/Lenders/Transparent Logo.png"

const Footer = () => {
    return (
        <Box sx={{width: "100%", display: "flex", justifyContent: "center", background: "black"}}>
            <img style={{width: "300px"}} src={RMBIcon} alt="icon"/>
        </Box>
    )
}

export default Footer;