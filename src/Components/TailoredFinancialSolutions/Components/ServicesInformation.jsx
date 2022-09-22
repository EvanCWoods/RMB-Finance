import { Grid } from "@mui/material";
import ServicesInformationText from "./ServicesInformationText";
import ServicesInformationImage from "./ServicesInformationImage";
import ServicesInformationCard from "./ServicesInformationCard";
import FirstTimeBuyers from "../../../Assets/Images/first-time-buyers.webp";
import Investing from "../../../Assets/Images/investing.jpeg";
import Refinancing from "../../../Assets/Images/refinancing.jpeg";
import PersonalAndBusiness from "../../../Assets/Images/personal-business.webp";

const ServicesInformation = () => {
  return (
    <Grid
      container
      sx={{ mt: "50px", px: "5%", display: "flex", justifyContent: "center" }}
    >
      <ServicesInformationCard
        title="First Home Buyer"
        content="We understand entering the property market for the first time is daunting and
overwhelming. We will be with you every step of the way from working out how
much you can borrow to selecting government schemes to achieve your goals of
home ownership."
        image={FirstTimeBuyers}
      />
      <ServicesInformationCard
        title="Investing in Property"
        content="Whether you’re looking to purchase your first investment property, or
        wanting to grow your existing property portfolio, speak to us today. We
        know how to guide property investors to achieve their goals and maximise
        their wealth."
        image={Investing}
      />
      <ServicesInformationCard
        title="Refinancing"
        content="We understand entering the property market for the first time is daunting and
overwhelming. We will be with you every step of the way from working out how
much you can borrow to selecting government schemes to achieve your goals of
home ownership."
        image={Refinancing}
      />
      <ServicesInformationCard
        title="Peresonal &amp; Business Finance"
        content="We understand entering the property market for the first time is daunting and
overwhelming. We will be with you every step of the way from working out how
much you can borrow to selecting government schemes to achieve your goals of
home ownership."
        image={PersonalAndBusiness}
      />
    </Grid>
  );
};

export default ServicesInformation;
