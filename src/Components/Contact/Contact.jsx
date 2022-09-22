import { Grid, Divider, Typography, Paper, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInputField from "./Components/TextInputField";

const validationSchema = Yup.object().shape({
    FirstName: Yup.string().required("Required"),
    LastName: Yup.string().required("Required"),
    Email: Yup.string().required("Required"),
    Subject: Yup.string().required("Required"),
    Message: Yup.string().required("Required"),
})

const handleSubmit = (values) => {
    console.log(values)
}

const Contact = () => {
  return (
    <Formik
    initialValues={{
        FirstName: "",
        LastName: "",
        Email: "",
        Subject: "",
        Message: "",
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
        console.log("submit");
        handleSubmit(values);
    }}
    >
      <Form>
        <Grid container sx={{ mb: "100px" }}>
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            <Paper elevation={2} sx={{ pb: "30px" }}>
              <Grid container spacing={1} sx={{ px: "5%" }}>
                <Typography variant="h4" sx={{ mt: "2%" }}>
                  Contact Us
                </Typography>
                <TextInputField
                  displayName="First Name"
                  fieldName="FirstName"
                  size={6}
                />
                <TextInputField
                  displayName="Last Name"
                  fieldName="LastName"
                  size={6}
                />
                <Grid item xs={12} md={12} lg={12} sx={{ my: 2 }}>
                  <Divider />
                </Grid>
                <TextInputField
                  displayName="Email"
                  fieldName="Email"
                  size={6}
                />
                <TextInputField
                  displayName="Subject"
                  fieldName="Subject"
                  size={6}
                />
                <TextInputField
                  displayName="Message"
                  fieldName="Message"
                  size={12}
                  mutliline={true}
                  rows={5}
                  maxRows={10}
                />
                <Grid item xs={10}></Grid>
                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "center", mt: "15px" }}
                >
                  <Button variant="contained" type="submit">Send</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={1} md={3}></Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default Contact;
