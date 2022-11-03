import { Box, Typography } from "@mui/material";
import ImageContainer from "./Components/ImageContainer";

// images
import image1 from "../../Assets/Images/Lenders/6b8d75f0-bcca-11ea-86d1-e52bae5cc086.png";
import image2 from "../../Assets/Images/Lenders/38d35182db3e3ad5b996717f262aa0f39107ea68.jpeg";
import image3 from "../../Assets/Images/Lenders/0271_637659923180779607.png";
// import image4 from "../../Assets/Images/Lenders/335-3358418_pepper-money-pepper-money-logo-png.png"
import image4 from "../../Assets/Images/Lenders/2560px-Macquarie_Group_logo.svg.png";
import image5 from "../../Assets/Images/Lenders/2560px-Virgin_Money_logo.svg.png";
import image6 from "../../Assets/Images/Lenders/62833500b9f3a.png";
import image7 from "../../Assets/Images/Lenders/1601876083229.jpeg";
import image8 from "../../Assets/Images/Lenders/a.png";
import image9 from "../../Assets/Images/Lenders/ANZ_Digital_Flat_blue.png";
import image10 from "../../Assets/Images/Lenders/Bank_of_Queensland_Limited.png";
import image11 from "../../Assets/Images/Lenders/Bankwest_logo.png";
import image12 from "../../Assets/Images/Lenders/Citibank.svg.png";
import image13 from "../../Assets/Images/Lenders/download (1).png";
import image14 from "../../Assets/Images/Lenders/download (2).png";
import image15 from "../../Assets/Images/Lenders/download (3).png";
import image16 from "../../Assets/Images/Lenders/download (4).png";
import image17 from "../../Assets/Images/Lenders/download.png";
import image18 from "../../Assets/Images/Lenders/Full-Colour_PRIMARY-LOGO_Company-Statement-Tagline.png";
import image19 from "../../Assets/Images/Lenders/GSB_Logo_horizontal_RGB.png";
import image20 from "../../Assets/Images/Lenders/Hejaz-Logo-450x259.png";
import image21 from "../../Assets/Images/Lenders/hpblogodesktop.png";
import image22 from "../../Assets/Images/Lenders/ING_Group_N.V._Logo.svg.png";
import image23 from "../../Assets/Images/Lenders/logoDesktop.png";
import image24 from "../../Assets/Images/Lenders/MKM-Capital.jpeg";
import image25 from "../../Assets/Images/Lenders/MyLoan-Elect-Logo.png";
import image26 from "../../Assets/Images/Lenders/NAB-National-Australia-Bank-logo.png";
import image27 from "../../Assets/Images/Lenders/NOW FINANCE.png";
import image28 from "../../Assets/Images/Lenders/Paramount-Logo-mortgage-transparent_retina.png";
import image29 from "../../Assets/Images/Lenders/Pepper_Money.png";
import image30 from "../../Assets/Images/Lenders/Prospa.png";
import image31 from "../../Assets/Images/Lenders/transparent-logo-banksa-340x140.png";
import image32 from "../../Assets/Images/Lenders/Westpac_logo.svg.png";

const imageList = [
  image4, image9, image11, image12, image14, image32, image26,
  image1,
  image2,
  image5,
  image6,
  image7,
  image8,
  image10,
  image13,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image27,
  image28,
  image29,
  image30,
  image31,
];

const logoLarge = [image4, image9, image11, image12, image14, image32, image26];

const Lenders = () => {
  let width = window.innerWidth;

  if (width > 768) {
    return (
      <Box sx={{ my: "150px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h4" sx={{ mb: "30px" }}>
            20+ Lenders on our Panel
          </Typography>
        </Box>
        <Box
          sx={{
            width: "90%",
            mx: "5%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {imageList.map((image) => (
            <ImageContainer image={image} key={image} size="40px" />
          ))}
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ my: "150px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ mb: "30px" }}>
            20+ Lenders on our Panel
          </Typography>
        </Box>
        <Box
          sx={{
            width: "90%",
            mx: "5%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {logoLarge.map((image) => (
            <ImageContainer image={image} key={image} size="40px" />
          ))}
        </Box>
      </Box>
    );
  }
};

export default Lenders;
