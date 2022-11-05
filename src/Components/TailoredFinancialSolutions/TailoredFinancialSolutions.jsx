import { Box, Typography } from "@mui/material";
import ServicesInformation from "./Components/ServicesInformation";

const TailoredFinancialSolutions = () => {
    return (
        <Box sx={{ mt: "40%" }}>
            <Box sx={{ display: "flex", justifyContent: "center", py: "50px" }}>
                <Typography variant="h4">Tailored Financial Solutions</Typography>
            </Box>
            <Box>
                <ServicesInformation />
            </Box>
        </Box>
    )
}

export default TailoredFinancialSolutions;