import { Grid, Typography, Box } from "@mui/material";

const ServicesInformationText = (props) => {
  return (
      <Grid
        item
        xs={6}
        md={4}
        lg={4}
      >
        <Box sx={{display: "flex", justifyContent: "center"}}><Typography variant="h5">{props.title}</Typography></Box>
        <Typography sx={{m: "15px"}}>{props.content}</Typography>
      </Grid>
  );
};

export default ServicesInformationText;
