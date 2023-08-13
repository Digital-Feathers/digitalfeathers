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

// Material Kit 2 React components
import MKBox from "../../../../components/MKBox";
import MKTypography from "../../../../components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "../../../../examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "../../../../assets/images/team-5.jpg";
import team2 from "../../../../assets/images/bruce-mars.jpg";
import team3 from "../../../../assets/images/ivana-squares.jpg";
import team4 from "../../../../assets/images/ivana-square.jpg";

function Team() {
  const teamData = [
    {
      image: team1,
      name: "Emma Roberts",
      position: "UI Designer",
      description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
      mb: 1,
    },
    {
      image: team2,
      name: "William Pearce",
      position: "Boss",
      description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
      mb: 1,
    },
    {
      image: team3,
      name: "Ivana Flow",
      position: "Athlete",
      description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
      mb: { xs: 1, lg: 0 },
    },
    {
      image: team4,
      name: "Marquez Garcia",
      position: "JS Developer",
      description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
      mb: { xs: 1, lg: 0 },
    },
  ];
  
  
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {teamData.map((team, index) => (
            <Grid item xs={12} lg={6} key={index}>
              <MKBox mb={team.mb}>
                <HorizontalTeamCard
                  image={team.image}
                  name={team.name}
                  position={{ color: "info", label: team.position }}
                  description={team.description}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>

      </Container>
    </MKBox>
  );
}

export default Team;
