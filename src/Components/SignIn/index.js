import React,{useState,useEffect} from "react";
import axios from "axios";
import 
{
Paper,
Grid,
TextField, 
Typography, 
Button,
}
from '@mui/material';
import { Link,useNavigate} from "react-router-dom";
import { makeStyles } from "@mui/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Navbar from "../components/Nav";
import { BACKEND_URL, useAuth } from "../../Utils/auth";
// import ImageTitle from "../components/ImageTitle";
// import FooterMain from "../components/FooterMain";




const useStyles = makeStyles({

    loginPaper:{

        margin:"20px auto",padding:"2%",
        width:"40%"
    },
  textField:{
    marginBottom:"3%"

  },
  loginText:{
    
       fontSize:"40px"
  }

});



function Login(props)
{

    const classes=useStyles();
    const navigate = useNavigate();
    const {web3,accounts,contract}=props
   
    
    
    const [loginForm,updateLoginForm] =useState({
            email:"",
            password:""
        });

    const [errors,updateErrors]=useState({
        msg:""
        });

    const {user,setUser} = useAuth();

    function isValid()
    {
        let formIsValid = true;
		if (!loginForm.email || !loginForm.password) {
			formIsValid = false;
			updateErrors({msg: "Please fill Empty fields"});
			
	}

	return formIsValid;
    }


    function handleChange(event )
    {
        var name =event.target.name;
        var value = event.target.value;

        updateLoginForm(function(prevState){

            return ({

                ...prevState,
                [name]:value

            });
        });
    }

   
   

  const  handleSignMessage = (publicAddress, nonce) => {
        return new Promise((resolve, reject) =>
          web3.eth.personal.sign(
            `I am signing my one-time nonce: ${nonce}`,
            publicAddress,
            (err, signature) => {
              if (err) return reject(err);
              return resolve({ publicAddress, signature });
            }
          )
        );
      };



   function handleSubmit()
    {
        if(!isValid())
        {
            alert(errors.msg)
        }
        else{
            console.log(loginForm);
            axios.post(`${BACKEND_URL}login`,loginForm)
            .then((res)=>{
                    console.log(res.data.user);
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    console.log("SignIn LocalStorage:",localStorage);
                    // navigate("/organizerContractsDisplayContainer");      
            })
            .catch((err)=>{
                console.log(err);
            }).then(res => {
                navigate("/organizerContractsDisplayContainer");
            });
        }
    }

    function getAddress()
    {

        console.log(accounts);
        document.getElementById("pubAddress").value=accounts[0].toLowerCase();
        updateLoginForm(
            function  (prevState){
            return (
                {
                    ...prevState,
                    pubAddress:document.getElementById("pubAddress").value
                }
            );
            }

        );

    }

    return(
    <div>
        {/* <Navbar/> */}
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Federated Learning Over Blockchain
          </Typography>
        </Toolbar>
      </AppBar>
        <div style={{"marginTop":"160px"}}>
        <Paper elevation={5} className={classes.loginPaper} >

        {/* <ImageTitle title="LOGIN"/> */}
        {/* <h2>{accounts[0]}</h2> */}
            <form >

            <Grid container spacing={2}>

            {/* <Grid item xs={12} lg={9}>
            <TextField 
                placeholder="Public Adress"
                name="pubAddress"
                id="pubAddress"
                value={loginForm.pubAddress}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
               className={classes.fields}
               autoComplete="off"
            />
            </Grid> */}
            
            
            {/* <Grid item xs={12} lg={3}>
            <Button onClick={getAddress} style={{color:"white",backgroundColor:"black"}} fullWidth>Get Address</Button>
            </Grid> */}

            <Grid item xs={12} lg={12}>
            <TextField
                    
                    className={classes.textField} 
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={loginForm.email}
                    onChange={handleChange}
                    autoComplete="off"
                    fullWidth
                 />

            </Grid> 
           
            <Grid item xs={12} lg={12} >
            <TextField 
                    className={classes.textField}
                        variant="outlined"
                        label="Password"
                        name="password" 
                        type="password"
                        value={loginForm.password}
                        onChange={handleChange}
                        autoComplete="off"
                        fullWidth
                        
         />
            
            </Grid> 


                  
            </Grid>
            <Link to="/signup"><Typography>New User ? Register</Typography></Link>
            <Grid container>
                <Grid item xs={0} md={9}> </Grid>
                <Grid item xs={12} md={3}>  
                    <Button onClick={handleSubmit} variant="outlined"  style={{backgroundColor:"#2196f3",color:"white",width:"100%"}}>Login</Button>
                </Grid>
            </Grid>

            </form>
        </Paper>
        </div>
        {/* <FooterMain/> */}
    </div>
    );
}

export default Login;