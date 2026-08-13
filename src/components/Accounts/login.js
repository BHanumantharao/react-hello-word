import {FormGroup, FormControl, InputLabel, FormHelperText, Input, Box} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";

const Login = (props) => {
    // const [userName, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    let [user, setUser] = useState({
        "userName": "",
        "email": "",
        "password": ""
    })

    let onTextChange=(event)=> {
        const targetname = event.target.name
        setUser({
            ...user,
            [targetname]: event.target.value
        })
    }
    let onClick = () => {
        if(user.email==='admin@gmail.com' && user.password==='pass@123') {
            props.loginMethod();
        }
        console.log("props.is", props.isLoggedIn)
    }

    return (
        <>
            <Box component="form" sx={{
                width: {
                    xs: '90%',   // extra-small screens (mobile)
                    sm: '80%',   // small screens (tablets)
                    md: 400,     // medium and larger screens (fixed width)
                },
                marginLeft: {
                    xs: 0,       // no left margin on mobile
                    sm: 'auto',  // center on tablets
                    md: 60,       // margin-left for desktops
                },
                marginRight: 'auto', // keeps it centered when marginLeft is auto
                padding: 2,          // adds breathing room
            }}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="my-input">User Name</InputLabel>
                        <Input name="userName" id="my-input" aria-describedby="my-helper-text" onChange={onTextChange}/>
                        <FormHelperText id="my-helper-text">We'll never share your user name.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input name="email" id="my-input" aria-describedby="my-helper-text" onChange={onTextChange}/>
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input name="password" id="my-input" aria-describedby="my-helper-text" onChange={onTextChange}/>
                        <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText>
                    </FormControl>
                </FormGroup>
                <Button variant="contained" color="primary" onClick={onClick} sx={{ marginTop: 2 }}>
                    Login
                </Button>
            </Box>
        </>
    )
}


export default Login;