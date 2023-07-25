/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import FlagIcon from '@mui/icons-material/Flag';
import AppsIcon from '@mui/icons-material/Apps';

// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";
import MKSocialButton from "../../components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../examples/Footers/DefaultFooter";
import FilledInfoCard from "../../examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "./sections/Counters";
import Information from "./sections/Information";
import DesignBlocks from "./sections/DesignBlocks";
import Pages from "./sections/Pages";
import Testimonials from "./sections/Testimonials";
import Download from "./sections/Download";

// Presentation page components
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

// Routes
import routes from "../../routes";
import footerRoutes from "../../footer.routes";

// Images
import bgImage from "../../assets/images/bg-presentation.jpg";
import WhyChooseUs from "./sections/WhyChooseUs";
import AboutUs from "./sections/AboutUs";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          // type: "external",
          route: "/pages/authentication/sign-in",
          label: "Signin / Login",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                  textAlign: "center"
                },
              })}
            >
              Unlock Your Digital Success
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
             Leading digital marketing agency specializing in <br/> 📈 Digital Marketing | 🎯 SEO |🌐 Web Development | And More!
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <WhyChooseUs/>
        {/* <DesignBlocks /> */}
        {/* <Pages /> */}
        <AboutUs/>
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon=<FlagIcon/>
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon=<PrecisionManufacturingIcon/>
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon=<AppsIcon/>
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://www.instagram.com/digitalfeatherswins/"
                  target="_blank"
                  color="instagram"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Instagram
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/profile.php?id=100093637119645"
                  target="_blank"
                  color="#f23364"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Facebook
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.youtube.com/@digitalfeatherswins"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;YouTube
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
