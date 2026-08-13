import './footer.css'
import {AppBar, Box, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import MoreIcon from '@mui/icons-material/MoreVert';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <>
            <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0, color: "#ffffff", backgroundColor: "#1e3a8a" }}>
                <Toolbar>
                    <div className="footer">
                        <p><CopyrightIcon fontSize="small"/>Copyright, All rights reserved - 2026</p>
                        <p>Contact us  <YouTubeIcon />  <LinkedInIcon />  <FacebookIcon />  <XIcon />  <EmailIcon /></p>
                    </div>

                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Footer;