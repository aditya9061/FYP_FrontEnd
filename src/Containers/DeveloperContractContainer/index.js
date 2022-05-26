import React, {useState}  from "react";
import Dashboard from "../../Components/Dashboard";
import DeveloperContractsDisplayTable from "../../Components/DeveloperContractsTable";
import { TableRow,TableCell, IconButton } from "@mui/material";
import PublishIcon from '@mui/icons-material/Publish';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import DeveloperForm from "../../Components/Forms/developerForm";
import { Container,Paper,Grid } from "@mui/material";
import {useAuth} from "../../Utils/auth";


const DeveloperContractDisplay = (props) => {

const auth = useAuth();




const columnNames = [
    "Contract ID",
    "Organizer ID",
    "Name",
    "Accuracy",
    "Reward",
    "Submit Data"
  ];

  return( 
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <DeveloperContractsDisplayTable columnNames={columnNames} data={props.contractsData.filter(contract=>contract.organizer_address!=auth.user.account_address)}/>
              </Paper>
            </Grid>
    </Grid>
  </Container>
  );
  
}


export default function DeveloperContractDisplayContainer (props) {
    return <Dashboard inside={<DeveloperContractDisplay contractsData={props.contractsData}/>} />
}