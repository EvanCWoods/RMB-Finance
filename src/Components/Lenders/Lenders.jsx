import { Box, Typography } from "@mui/material";
import ImageContainer from "./Components/ImageContainer";

// images
import image1 from "../../Assets/logos/_Preview_ANZ_Digital_3rdparty.jpg";
import image2 from "../../Assets/logos/2560px-Macquarie_Group_logo.svg.cb951b531fd41e066868.png";
import image3 from "../../Assets/logos/2560px-Virgin_Money_logo.svg.a88a00fc40d44fdf64ec.png";
// import image4 from "../../Assets/logos/335-3358418_pepper-money-pepper-money-logo-png.png"
import image4 from "../../Assets/logos/1601876083229.5f716affa3f3b192f927.jpg";
import image5 from "../../Assets/logos/Bankwest Logo-Digital.png";
import image6 from "../../Assets/logos/Better choice.png";
import image7 from "../../Assets/logos/citi-r_blue-redarc_rgb.png";
import image8 from "../../Assets/logos/download-1.png";
import image9 from "../../Assets/logos/download-2.png";
import image10 from "../../Assets/logos/download-3.png";
import image11 from "../../Assets/logos/download.png";
import image12 from "../../Assets/logos/FMC_logoWhiteBG.jpg";
import image13 from "../../Assets/logos/GSB_Logo_stacked_RGB.png";
import image14 from "../../Assets/logos/hpblogodesktop.277514aa64c896715c19.png";
import image15 from "../../Assets/logos/Liverty.JPG";
import image16 from "../../Assets/logos/MKM_MAFG Logo_RGB_DeepBlueGold_Cobrand[28].png";
import image17 from "../../Assets/logos/MyLoan-Elect-Logo.png";
import image18 from "../../Assets/logos/NAB-National-Australia-Bank-logo.053bef1d6db0ca2ec3bd.png";
import image19 from "../../Assets/logos/now finance.jpeg";
import image20 from "../../Assets/logos/Paramount-Logo-mortgage-transparent_retina.f314353c6e2db42e6fab.png";
import image21 from "../../Assets/logos/Pepper_Money.9d8f855a963719a200a6.png";
import image22 from "../../Assets/logos/Ubank.png";
import image23 from "../../Assets/logos/Westpac_logo.svg.png";

const imageList = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,

];

// const logoLarge = [image4, image9, image11, image12, image14, image32, image26];

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
      </Box>
    );
  }
};

export default Lenders;
