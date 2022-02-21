import './App.css';
import { Route, BrowserRouter as Router, Link, Redirect, Routes } from "react-router-dom";
import THEME from "./styled/theme.constants";
import { ThemeProvider } from "@emotion/react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Home  from './pages/Home';
import Login from './components/Login';
import User from './pages/User';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import LoginBtn from './components/Login';
import LogoutBtn from './components/Logout';


function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: process.env.API_KEY,
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: process.env.SCOPE
      })
    }
    gapi.load('client:auth2', start);
}, []);

  return (
    <div className="App">
    <ThemeProvider theme={THEME}>
       <Router>
          <AppBar position="static">
            <Toolbar>
              {/* <Typography variant="h6" className="Typograpy" component={Link} to="/" > Home </Typography> */}
              {/* <Button component={Link} to="/login"> Login </Button> */}
              {/* <Button className="logout-btn" component={Link} to="/" onClick={() => console.log("log out")}> Logout </Button> */}
              {/* <Button className="Typograpy" component={Link} to="/user" > User </Button> */}
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/user" exact element={<User/>}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
