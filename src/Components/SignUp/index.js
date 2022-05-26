import React,{useState} from "react";
import axios from "axios";
import { 
    Paper,
    Grid,
    TextField,
    Typography, 
    Button, 
    Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link,useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../Utils/auth";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Navbar from "../components/Nav";
// import ImageTitle from "../components/ImageTitle"
// import FooterMain from "../components/FooterMain";


// console.log(window.ethereum);
// const web3 = new Web3();
const useStyles = makeStyles({

    mapContainer:{
        width: "100%",
        height: "250px",
        borderWidth:"1px",
        borderStyle:"solid",
        overflow:"hidden"
    },
    formPaper:{
        margin:"10px auto",padding:"3%", width:"50%"
    },
    leftRight:{
        padding:"2%"
    }

})


// const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

function Register(props)
{
    const classes=useStyles();
    const navigate =useNavigate();
    // const {web3,accounts,contract} =  props;

    const[registerForm,updateRegisterForm] =  useState({
        publicAddress:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        passwordConfirm:""
    });

    const [errors,updateErrors] = useState(
        {
            msg:""
        }
    );


      

    function handleChange(event)
    {
        var name =event.target.name;
        var value = event.target.value;

        updateRegisterForm(
          function  (prevState){
            return (
                {
                    ...prevState,
                    [name]:value
                }
            );
          }

        );
     }

     function isValid()
        {
        let formIsValid = true;
        if ( !registerForm.firstName || !registerForm.lastName || !registerForm.email ||
             !registerForm.password 
            ) {
			formIsValid = false;
			updateErrors({
                msg:"Please fill the empty fields."
            });
        }
        

		return formIsValid;
        }

   async function handleSubmit() 
    {
        if(!isValid()){
            alert("Invalid");
            console.log(registerForm);
        }
    else{
        console.log(registerForm);
        axios.post(`${BACKEND_URL}signup`,registerForm)
        .then(function(res){
            navigate("/")
            console.log(res.data);
            // if(res.data.token)
            // {
            //     localStorage.setItem("user", res.data.user);
            // }
        }
        )
        .catch(function(err)
        {
            console.log(err);
        });
    }
       
}

async function getAddress()
{
    // document.getElementById("publicAddress").value=accounts[0].toLowerCase();

    updateRegisterForm(
        function  (prevState){
        return (
            {
                ...prevState,
                publicAddress:document.getElementById("publicAddress").value
            }
        );
        }
    );

}



    return(
        
        <div>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Federated Learning Over Blockchain
          </Typography>
        </Toolbar>
      </AppBar>
        <div style={{"marginTop":"140px"}}>
        {/* <Navbar isLogin={true} /> */}
        <Paper className={classes.formPaper}>
        
        
        <form >
        
        {/* <Grid container> */}
         {/* left side */}
        {/* <Grid item xs={12} md={6} className={classes.leftRight} > */}
        {/* <Typography style={{marginBottom:"2%"}}>Personal Details</Typography> */}
        <Grid container spacing={2}>
       

        {/* <Grid item  xs={12} md={6}>
            <TextField 
                placeholder="Public Adress"
                name="publicAddress"
                id="publicAddress"
                value={registerForm.publicAddress}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
               className={classes.fields}
               autoComplete="off"
            />
        </Grid> */}

        {/* <Grid item  xs={12} md={3}>
        <Button onClick={getAddress} style={{color:"white",backgroundColor:"black"}} fullWidth>Get Address</Button>
        </Grid> */}

        <Grid item  xs={12} md={6}>
            <TextField label="First Name"
                name="firstName"
                value={registerForm.firstName}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
               className={classes.fields}
               autoComplete="off"
            />
        </Grid>
        
        <Grid item xs={12} md={6}>
            <TextField label="Last Name"
                name="lastName"
                value={registerForm.lastName}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                className={classes.fields}
                autoComplete="off"
        
            />
        </Grid>
        
        <Grid item xs={12} lg={12}>
            <TextField label="Email"
                name="email"
                type="email"
                value={registerForm.email}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                className={classes.fields}
                autoComplete="off"
        
            />
        </Grid>
        
        <Grid item xs={12} lg={6}>
            <TextField label="Password" 
            name="password"
            value={registerForm.password}
            onChange={handleChange}
            type="password"
            fullWidth
            required
            variant="outlined"
            className={classes.fields}
            autoComplete="off"
        />
        </Grid>

        <Grid item xs={12} lg={6}>
            <TextField label="Confirm Password" 
            name="passwordConfirm"
            value={registerForm.passwordConfirm}
            onChange={handleChange}
            type="password"
            fullWidth
            required
            variant="outlined"
            className={classes.fields}
            autoComplete="off"
        />
        </Grid>
        
        </Grid>
        {/* </Grid> */}
        
            {/* <Grid item xs={12} md={6} className={classes.leftRight} >
            <Typography style={{marginBottom:"2%"}} >Location Details</Typography>
            </Grid> */}
        
        {/* </Grid> */}
        
    <Divider style={{marginBottom:"2%"}}/>
        
    <Grid container>
        <Grid item xs={12} md={10}><Link to="/"><Typography>Already User ? Login Here</Typography></Link></Grid>
        <Grid item xs={12} md={2}><Button onClick={handleSubmit} style={{color:"white",backgroundColor:"#2196f3"}} fullWidth>Submit</Button></Grid>
    </Grid>
        
    </form>
    </Paper>
        
    {/* <FooterMain/> */}
</div>
</div>
    );
   }


export default Register;

