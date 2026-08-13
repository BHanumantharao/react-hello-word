import {FormGroup, FormControl, InputLabel, FormHelperText, Input, Box} from "@mui/material";

const Login = () => {
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
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Name</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
        </>
    )
}


export default Login;