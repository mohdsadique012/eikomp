import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Grid, Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";

function ApplicationPage() {
  const { id } = useParams();
  console.log(id);
  let filterId=id-1
  const Filterdata = [
    {
      applicationNumber: "Eik/23w/WPC/8439",
      category: "xl",
      model: "hero",
      actualTime: "25 Days",
      estimatedTime: "19 Days",
      Portal_Registration: "incomplete",
      Initation_Of_Testing: "incomplete",
      AIR_Registration: "complete",
      Foriegn_Registration: "complete",
      BOM_Registration: "complete",
      Application_Payment: "complete",
    },
    {
        applicationNumber: "Eik/23w/TEC/7434",
        category: "yl",
        model: "honda",
        actualTime: "25 Days",
        estimatedTime: "19 Days",
        Portal_Registration: "incomplete",
        Initation_Of_Testing: "incomplete",
        AIR_Registration: "complete",
        Foriegn_Registration: "complete",
        BOM_Registration: "complete",
        Application_Payment: "incomplete",
      },
      {
        applicationNumber: "Eik/23w/BIS/6501",
        category: "xxl",
        model: "maruti",
        actualTime: "25 Days",
        estimatedTime: "19 Days",
        Portal_Registration: "incomplete",
        Initation_Of_Testing: "incomplete",
        AIR_Registration: "complete",
        Foriegn_Registration: "incomplete",
        BOM_Registration: "incomplete",
        Application_Payment: "incomplete",
      },
      {
        applicationNumber: "Eik/23w/TEC/7666",
        category: "xx",
        model: "BMW",
        actualTime: "25 Days",
        estimatedTime: "19 Days",
        Portal_Registration: "incomplete",
        Initation_Of_Testing: "incomplete",
        AIR_Registration: "incomplete",
        Foriegn_Registration: "incomplete",
        BOM_Registration: "incomplete",
        Application_Payment: "incomplete",
      },
      {
        applicationNumber:  "Eik/23w/TEC/7687",
        category: "xlv",
        model: "audi",
        actualTime: "25 Days",
        estimatedTime: "19 Days",
        Portal_Registration: "complete",
        Initation_Of_Testing: "incomplete",
        AIR_Registration: "complete",
        Foriegn_Registration: "incomplete",
        BOM_Registration: "complete",
        Application_Payment: "incomplete",
      },
    // More data objects...
  ];
 let  data=Filterdata?.filter((item,index)=>{
    return index == filterId
  })

  const getStatusIcon = (status) => {
    if (status === "complete") {
      return <CheckCircleIcon sx={{ color: "green" }} />;
    } else {
      return <CancelIcon sx={{ color: "red" }} />;
    }
  };

  const filteredEntries = Object.entries(data[0])?.filter(
    ([, value]) => value === "complete" || value === "incomplete"
  );

  const countCompleted = (object) => {
    let completed = 0;
    let incomplete = 0;

    for (const key in object) {
      if (object[key] === "complete") {
        completed++;
      } else if (object[key] === "incomplete") {
        incomplete++;
      }
    }

    return { completed, incomplete };
  };

  const calculatePercentage = (completed, total) => {
    return ((completed / total) * 100).toFixed(2);
  };

  let totalCompleted = 0;
  let totalIncomplete = 0;

  data.forEach((item) => {
    const { completed, incomplete } = countCompleted(item);
    totalCompleted += completed;
    totalIncomplete += incomplete;
  });

  const completionPercentage = calculatePercentage(
    totalCompleted,
    totalCompleted + totalIncomplete
  );

  const getColor = (percentage) => {
    if (percentage > 75) {
      return "#212121";
    } else if (percentage > 50) {
      return "warning";
    } else if (percentage > 25) {
      return "warning";
    } else {
      return "error";
    }
  };

  return (
    <Box sx={{ bgcolor: "purple" }}>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box
            sx={{ bgcolor: "purple", height: "100px", color: "white", p: 2 }}
          >
            <Typography
              variant="h6"
              align="left"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "18px", // Change the font size
                  fontWeight: "bold", // Change the font weight
                  height: "40px",
                  color: "yellow",
                  allign: "center",
                },
                "@media (max-width: 360px)": {
                  fontSize: "14px", // Change the font size
                  fontWeight: "bold", // Change the font weight
                  height: "40px",
                  color: "yellow",
                  allign: "center",
                },
                "@media (max-width: 280px)": {
                  fontSize: "12px", // Change the font size
                  fontWeight: "bold", // Change the font weight
                  height: "40px",
                  color: "yellow",
                  allign: "center",
                },
              }}
            >
              Application number: {data[0]?.applicationNumber}
            </Typography>
            <Typography
              variant="h6"
              align="left"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "15px", // Change the font size
                  fontWeight: "bold", // Change the font weight
                  height: "40px",
                  color: "yellow",
                  alignItems: "center",
                },
              }}
            >
              Application category: {data[0]?.category}
            </Typography>
            <Typography
              variant="h6"
              align="left"
              sx={{
                paddingBottom: 3,
                "@media (max-width: 600px)": {
                  fontSize: "13px", // Change the font size
                  fontWeight: "bold", // Change the font weight
                  color: "yellow",
                  alignItems: "center",
                },
              }}
            >
              Product name: {data[0]?.model}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box
            sx={{ bgcolor: "purple", height: "100px", color: "white", p: 2 }}
          >
            <Box>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  "@media (max-width: 600px)": {
                    color: "#ffff00",
                  },
                }}
              >
                Compliance Type: TEC
              </Typography>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  "@media (max-width: 600px)": {
                    color: "#ffff00",
                  },
                }}
              >
                Application completion : {completionPercentage}%
              </Typography>
            </Box>
            <Box sx={{ height: "30px" }}>
              <LinearProgress
                variant="determinate"
                sx={{ height: "20px" }}
                value={completionPercentage}
                color={getColor(completionPercentage)}
              >
                {}
              </LinearProgress>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ bgcolor: "black", pt: 8, pb: 5, margin: 1 }}
      >
        {filteredEntries?.map(([key, value], index) => (
          <Box key={index} width={200} m={1}>
            <Card sx={{ maxWidth: 345, bgcolor: "purple" }}>
              <CardContent>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Box my={1} align="right" height={10}>
                    {getStatusIcon(value)}{" "}
                  </Box>
                  <Box my={1} align="center">
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "white", fontWeight: "bolder" }}
                    >
                      {key}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#e65100",
            color: "white",
            marginTop: 2,
            marginBottom: 2,
            marginRight: 3,
            marginLeft: 2,
            "@media (max-width: 600px)": {
              fontSize: "10px", // Change the font size
              fontWeight: "bold", // Change the font weight
              height: "40px",
            },
          }}
        >
          Download Certificate
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#e65100",
            color: "white",
            marginTop: 2,
            marginBottom: 2,
            marginRight: 3,
            marginLeft: 2,
            "@media (max-width: 600px)": {
              fontSize: "10px", // Change the font size
              fontWeight: "bold", // Change the font weight
              height: "40px",
            },
          }}
        >
          Download Progress Report
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#e65100",
            color: "white",
            marginTop: 2,
            marginBottom: 2,
            marginRight: 3,
            marginLeft: 2,
            "@media (max-width: 600px)": {
              fontSize: "10px", // Change the font size
              fontWeight: "bold", // Change the font weight
              height: "40px",
            },
          }}
        >
          Download Test Report
        </Button>
      </Box>
    </Box>
  );
}

export default ApplicationPage;
