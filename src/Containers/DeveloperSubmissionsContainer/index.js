import React, {useEffect, useState}  from "react";
import Dashboard from "../../Components/Dashboard";
import DisplayTable from "../../Components/DisplaySubmissionsTable";
import PublishIcon from '@mui/icons-material/Publish';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import DeveloperForm from "../../Components/Forms/developerForm";
import { Container,Paper,Grid,IconButton } from "@mui/material";
import DeveloperSubmissionsDisplayTable from "../../Components/DeveloperSubmissionsDisplayTable";
import axios from "axios";
import {BACKEND_URL, useAuth} from "../../Utils/auth";

const DeveloperSubmissionsDisplay = (props) => {

  const [tableData,setTableData] = useState([]);
  const auth = useAuth();

  async function getSubmissionsData(user) {
   await axios.post(BACKEND_URL+"get_developer_submissions",{userID:user}).then((response)=>{
      console.log(response.data);
      setTableData(response.data.submission_response)
    }).catch((response) => {
      console.log(response);
  })
  }
  useEffect(()=>{
    getSubmissionsData(auth.user?auth.user.account_address:null);
  },[]);

const trainDataIcon = () => {
    return(
        <IconButton >
            <ModelTrainingIcon fontSize="medium"/>
        </IconButton>
    )
}


const columnNames = [
    "Contract Address",
    "Accuracy",
  ];

  return( 
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <DeveloperSubmissionsDisplayTable columnNames={columnNames} data={tableData}/>
              </Paper>
            </Grid>
    </Grid>
  </Container>
  );
  
}


export default function DeveloperSubmissionDisplayContainer () {
    return <Dashboard inside={<DeveloperSubmissionsDisplay/>} />
}