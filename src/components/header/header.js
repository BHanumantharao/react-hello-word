// define the js
// create a class, methods -> render methods
// create a function, return statement -> return only html element


/*function Header() {
  return (
    <header>
      <h1>My First React App Header</h1>
    </header>
  );
}

export default Header;*/

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import './header.css'

/*
const Header = () => {
    return(
        <header>
            <h1>React Demo Application</h1>
            <nav>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Login</a>
                    </li>
                    <li>
                        <a>Register</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;*/

const Header = (props) => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{ color: "#ffffff", backgroundColor: "#1e3a8a" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/*<MenuIcon />*/}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {props.appTitle}
                    </Typography>
                    {props.isLoggedIn ? <Button color="inherit">Logout</Button> : <Button color="inherit">Login</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;