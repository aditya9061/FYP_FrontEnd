import React, {useState}  from "react";
import Dashboard from "../../Components/Dashboard";
import DeveloperContractsDisplayTable from "../../Components/DeveloperContractsTable";
import { TableRow,TableCell, IconButton } from "@mui/material";
import PublishIcon from '@mui/icons-material/Publish';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import DeveloperForm from "../../Components/Forms/developerForm";
import { Container,Paper,Grid } from "@mui/material";

const DeveloperContractDisplay = (props) => {



const trainDataIcon = () => {
    return(
        <IconButton >
            <ModelTrainingIcon fontSize="medium"/>
        </IconButton>
    )
}


const columnNames = [
    "Contract ID",
    "Organizer ID",
    "Accuracy",
    "Reward",
    "Submit Data",
    "Remove Contract",
  ];

  return( 
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <DeveloperContractsDisplayTable columnNames={columnNames} data={props.contractsData}/>
              </Paper>
            </Grid>
    </Grid>
  </Container>
  );
  
}


export default function DeveloperContractDisplayContainer (props) {
    return <Dashboard inside={<DeveloperContractDisplay contractsData={props.contractsData}/>} />
}