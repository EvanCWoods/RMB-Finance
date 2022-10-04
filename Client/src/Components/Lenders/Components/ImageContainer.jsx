import { Box } from "@mui/material";

const ImagineContainer = (props) => {
    return (
        <Box sx={{height: `${props.size}`, mx:"20px", my: "15px"}}>
            <img style={{height: "100%"}} src={props.image} alt="icon" />
        </Box>
    )
}

export default ImagineContainer;