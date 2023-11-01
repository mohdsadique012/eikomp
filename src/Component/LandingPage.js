import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const customStyles = {
  width: "200px", // Example width
  height: "40px", // Example height
  border: "1px solid white", // Example white border
  color: "white", // Example white text color
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Data = [
  {
    applicationNnumber: "Eik/23w/TEC/7434",
    category: "xl",
    maodel: "hero",
    actualTime: "11 Days",
    estimatedTime: "15Days",
  },
  {
    applicationNnumber: "Eik/23w/WPC/8439",
    category: "yl",
    maodel: "honda",
    actualTime: "25 Days",
    estimatedTime: "19Days",
  },
  {
    applicationNnumber: "Eik/23w/BIS/6501",
    category: "xxl",
    maodel: "maruti",
    actualTime: "20 Days",
    estimatedTime: "11Days",
  },
  {
    applicationNnumber: "Eik/23w/TEC/7666",
    category: "xx",
    maodel: "BMW",
    actualTime: "10 Days",
    estimatedTime: "13Days",
  },
  {
    applicationNnumber: "Eik/23w/TEC/7687",
    category: "xlv",
    maodel: "audi",
    actualTime: "35 Days",
    estimatedTime: "28Days",
  },
];

const LandingPage = () => {
  const [search, setSearch] = useState("");
  return (
    <Container
      sx={{
        width: "100%",
        backgroundColor: "purple",
        maxHeight: "100%",
        marginTop: "10px",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{
          width: { xs: "100%", sm: "80%" },
          margin: "auto",
          color: "white",
          marginBottom: 2,
          pt: "12px",
        }}
      >
        Application Progress & Reports
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          bgcolor: "black",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            color: "white",
            marginTop: 2,
            marginBottom: 2,
            marginLeft: 3,
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder=" ApplicationNumber"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Search>
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "purple",
            color: "white",
            marginTop: 2,
            marginBottom: 2,
            marginRight: 3,
            marginLeft: 2,
            "@media (max-width: 600px)": {
              fontSize: "10px",
              fontWeight: "bold",
              height: "40px",
            },
          }}
        >
          Download Table Data
        </Button>
      </Box>
      <Box
        sx={{
          borderBottom: "5px solid white",
          marginTop: "5px",
          paddingBottom: "20px",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ borderBottom: "1px solid white" }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">S.No</StyledTableCell>
                <StyledTableCell>Application number</StyledTableCell>
                <StyledTableCell align="center">
                  Application Category
                </StyledTableCell>
                <StyledTableCell align="center">Models</StyledTableCell>
                <StyledTableCell align="center">Estimated time</StyledTableCell>
                <StyledTableCell align="center">Actual time</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Data.filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.applicationNnumber.toLowerCase().includes(search);
              }).map((row, index) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="left">{index + 1}</StyledTableCell>
                  <StyledTableCell align="left">
                    <Link
                      to={`/TECmodification/${index + 1}`}
                      style={{
                        textDecoration: 'none', 
                        color: 'black', 
                      
                      }}
                    >
                      {row.applicationNnumber}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.category}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.maodel}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.estimatedTime}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    style={{
                      color:
                        row.actualTime > row.estimatedTime ? "red" : "inherit",
                    }}
                  >
                    {row.actualTime}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default LandingPage;
