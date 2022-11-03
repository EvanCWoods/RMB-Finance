import { Grid } from "@mui/material";

const ServicesInformationImage = (props) => {
    return (
        <Grid item xs={6} md={4} lg={4}>
          <img style={{width: "100%"}} src={props.image} alt="services" />
        </Grid>
    )
}

export default ServicesInformationImage;