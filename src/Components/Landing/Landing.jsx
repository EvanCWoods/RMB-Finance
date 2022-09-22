import { Box, Typography, Grid } from "@mui/material";
import landingHouse from "../../Assets/Images/landing-house.png";
import TailoredFinancialSolutions from "../TailoredFinancialSolutions/TailoredFinancialSolutions";
import Lenders from "../Lenders/Lenders";
import Contact from "../Contact/Contact";

const Landing = () => {
  return (
    <Box
      sx={{ width: "100%", height: "100%"}}
      style={{
        backgroundImage: `url(${landingHouse})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Box sx={{ p: 5 }}>
        <Grid container>
          <Grid item xs={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", py: 2 }}>
              RMB FINANCE
            </Typography>
          </Grid>
          <Grid item xs={0} md={5} lg={6}></Grid>
          <Grid item xs={6} md={3} lg={3} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", background: "grey", width: "60%", display: "flex", justifyContent: "center", alignItems: "center", py: 2, cursor: "pointer"}}
            >
              Contact Us
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TailoredFinancialSolutions />
      <Lenders />
      <Contact />
    </Box>
  );
};

export default Landing;
