import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import Delete from '@mui/icons-material/Delete';
import Favorite from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Typography,Box ,Grid} from '@mui/material';
import Navbar from "./Layout/Navbar"
import LandingPage from './Component/LandingPage';
import ApplicationPage from './Component/ApplicationPage';
function App() {


  return (
  <>
 <Navbar />
 <Routes>
 <Route exact path="/" element={<LandingPage />}></Route>
 <Route path="/TECmodification/:id" element={<ApplicationPage />}></Route>

 </Routes>
  </>
  );
}

export default App;
