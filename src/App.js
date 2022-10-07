import './App.css';
import React from "react";
import NavBar from "./components/navbar/navbar.js";
import Home from "./views/home/home.js";
import About from "./views/about/about.js";
import Footer from "./components/footer/footer.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactGA from "react-ga4";

ReactGA.initialize("G-JGQH81Z3YV");
ReactGA.send("pageview");

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
        main: "#533483",
    //   main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
            <Router>
            <NavBar />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
            <Footer />
        </div>
    </ThemeProvider>
  );
}



export default App;
