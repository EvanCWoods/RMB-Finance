import { Grid, Typography, Box, Paper } from "@mui/material";

const ServicesInformationCard = (props) => {
  return (
      <Grid
        item
        xs={10}
        md={2}
        sx={{display: "flex", justifyContent: "center", margin: "20px 0", minWidth: "280px", maxWidth: "350px"}}
      >
        <Paper elevation={2} sx={{borderRadius: "10px 10px 0 0", width: "90%", ml: "5%"}}>
            <img style={{width: "100%", borderRadius: "10px 10px 0 0"}} src={props.image} alt="service" />
            <Box sx={{display: "flex", justifyContent: "center", px: "10px"}}><Typography variant="h5">{props.title}</Typography></Box>
            <Typography sx={{m: "15px", pb: "50px", textAlign: "center"}}>{props.content}</Typography>
        </Paper>
      </Grid>
  );
};

export default ServicesInformationCard;
