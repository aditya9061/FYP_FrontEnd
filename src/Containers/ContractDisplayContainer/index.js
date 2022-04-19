import React, {useState, useEffect}  from "react";
import Dashboard from "../../Components/Dashboard";
import DisplayTable from "../../Components/DisplaySubmissionsTable";
import OrganizerContractsTable from "../../Components/OrganizerContractsTable";
import { Container, Grid, Paper, IconButton } from "@mui/material";
import axios from "axios";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {BACKEND_URL} from "../../Utils/auth";
const ContractDisplay = (props) => {

  const [contractsData,setcontractsData] = useState([]);
  
  async function getContractsData() {
    await axios
      .get(BACKEND_URL+"get_contract_data")
      .then((response) => {
        console.log(response.data);
        setcontractsData(response.data.contract_data);
      })
      .catch((err) => {
        console.log(err);
      })
      // .finally((response) => response? setcontractsData(response.data):null);
}

useEffect(()=>getContractsData(),[]);


const columnNames = [
    "Contract ID",
    "Organizer ID",
    "Base Accuracy",
    "Reward",
    "Open Contract",
    "Download Model"
  ]; 

  console.log("Contracts Data From Container:",props.contractsData)

  return(
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <OrganizerContractsTable columnNames={columnNames} data={contractsData} />
                </Paper>
              </Grid>
      </Grid>
    </Container>
  ); 
  
};


export default function ContractDisplayContainer () {
    return <Dashboard inside={<ContractDisplay />} />
}