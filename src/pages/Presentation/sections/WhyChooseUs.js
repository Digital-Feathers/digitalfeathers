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
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MediationIcon from '@mui/icons-material/Mediation';
import TokenIcon from '@mui/icons-material/Token';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";

const FeatureBlock = ({ icon:IconComp, text, index }) => {
  const [isHovered, setIsHovered] = useState(-1);

  const jumpStyles = {
    position: 'relative',
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered === index ? 'translateY(-3px)' : 'translateY(0)',
  };

  return (
    <MKBox display="flex" alignItems="center" p={2}
      onMouseEnter={() => setIsHovered(index)}
      onMouseLeave={() => setIsHovered(-1)}>
      <MKBox
        width="3rem"
        height="3rem"
        variant="gradient"
        bgColor="info"
        color="white"
        coloredShadow="info"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="xl"
        style={{ ...jumpStyles }}
      >
        <Icon fontSize={'medium'}><IconComp/></Icon>
      </MKBox>
      <MKTypography variant="body2" color="text" pl={2}>
        {text}
      </MKTypography>
    </MKBox>
  );
};

function WhyChooseUs() {

  const features = [
    { icon: Diversity3Icon, text: 'Expert Team: Our skilled professionals bring years of experience and knowledge.' },
    { icon: EmojiObjectsIcon, text: 'Custom Solutions: We tailor our strategies to align with your unique business goals.' },
    { icon: AcUnitIcon, text: 'Results-Driven: We are committed to delivering measurable results and maximizing your ROI.' },
    { icon: MediationIcon, text: 'Transparent Communication: Regular updates and detailed reports on campaign progress.' },
    { icon: TokenIcon, text: 'Customer Satisfaction: Your success is our top priority, we go above and beyond for you!' },
  ];

  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              💡 Why Choose Us?
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              We are a leading digital marketing agency dedicated to providing
              exceptional web development, SEO, and digital marketing services.
              With our expertise and cutting-edge strategies, we help businesses
              like yours soar to new heights
            </MKTypography>
            <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition:
                    "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round":
                  {
                    transform: "translateX(6px)",
                  },
              }}
            >
              More about us
              <Icon sx={{ fontWeight: "bold" }}><ArrowForwardIcon/></Icon>
            </MKTypography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}
          >
            <Stack>
            {features.map((feature, index) => (
              <FeatureBlock
                key={index}
                index={index}
                icon={feature.icon}
                text={feature.text}
              />
            ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default WhyChooseUs;
