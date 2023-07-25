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
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import DevicesIcon from '@mui/icons-material/Devices';

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "../../../examples/Cards/RotatingCard";
import RotatingCardFront from "../../../examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../../../examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "../../../assets/images/rotating-card-bg-front.jpeg";
import bgBack from "../../../assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Feel the
                    <br />
                    Material Kit
                  </>
                }
                description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon=<ContentCopyIcon fontSize="13px" color="#1a73e8" style={{fontSize:"30px", color:"#1a73e8"}}/>
                  title="Web Development"
                  description="Captivating websites that engage your audience and reflect your brand identity. Our skilled team of web
developers works closely with you to create captivating."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon=<FlipToFrontIcon fontSize="13px" color="#1a73e8" style={{fontSize:"30px", color:"#1a73e8"}}/>
                  title="SEO (Search Engine Optimization)"
                  description="Boost your website's visibility and attract organic traffic, By
optimizing your website's structure, content, and
relevance."          />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                 icon=<PriceChangeIcon fontSize="13px" color="#1a73e8" style={{fontSize:"30px", color:"#1a73e8"}}/>
                  title="Digital Marketing"
                  description="Tailored strategies to enhance your online presence and drive conversions. enhance your online
presence, expand your reach, and engage your target
audience. "
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon=<DevicesIcon fontSize="13px" color="#1a73e8" style={{fontSize:"30px", color:"#1a73e8"}}/>
                  title="And More"
                  description="We offer a range of additional services to ensure your digital success."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
