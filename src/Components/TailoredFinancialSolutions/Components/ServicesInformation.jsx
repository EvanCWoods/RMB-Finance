import { Grid } from "@mui/material";
import ServicesInformationCard from "./ServicesInformationCard";
import FirstTimeBuyers from "../../../Assets/Images/first-time-buyers.webp";
import Investing from "../../../Assets/Images/investing.jpeg";
import Refinancing from "../../../Assets/Images/refinancing.jpeg";
import PersonalAndBusiness from "../../../Assets/Images/personal-business.webp";

const ServicesInformation = () => {
  return (
    <Grid
      container
      sx={{ px: "5%", display: "flex", justifyContent: "center" }}
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
        content="With interest rate changes it’s possible that the loan product you started with may not be as competitive as it used to be. You could potentially save thousands of dollars refinancing your loan. Our team can assist in consolidating your personal loans, credit cards and other debts into one loan. Reach out to our team to arrange a loan review to potentially save you thousands."
        image={Refinancing}
      />
      <ServicesInformationCard
        title="Personal &amp; Business Finance"
        content="There is a myriad of factors that will impact the loan. Which is why it’s important to have someone guide you through the process to achieve your personal and business goals."
        image={PersonalAndBusiness}
      />
    </Grid>
  );
};

export default ServicesInformation;
