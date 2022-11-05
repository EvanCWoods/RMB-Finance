import { Box, Typography, Grid } from "@mui/material";
import landingHouse from "../../Assets/Images/landing-house.png";
import TailoredFinancialSolutions from "../TailoredFinancialSolutions/TailoredFinancialSolutions";
import RMBIcon from "../../Assets/Images/Favicon Transparent.ico"
import RMBText from "../../Assets/Images/Screen Shot 2022-09-26 at 9.08.09 pm.png"
import Lenders from "../Lenders/Lenders";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    <Box
      sx={{ width: "100%", height: "100%", maxWidth: "1900px" }}
      style={{
        backgroundImage: `url(${landingHouse})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Box sx={{ background: "white" }}>
        <Grid container>
          <Grid item xs={6} md={4} lg={3}>
            <Box sx={{ display: "flex", alignItems: "center", color: "#BB9D63" }}>
              <Typography variant="h4" sx={{ color: "white", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <img style={{ width: "70px" }} src={RMBIcon} alt="icon" />
              </Typography>
              <img style={{ height: "30px" }} src={RMBText} alt="icon" />
            </Box>
          </Grid>
          <Grid item xs={0} md={5} lg={6}></Grid>
          <Grid item xs={6} md={3} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <a href="#contact-form">
              <Typography
                variant="subtitle1"
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", color: "#BB9D63" }}
              >
                Contact Us
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Box>
      <TailoredFinancialSolutions />
      <Lenders />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Landing;
