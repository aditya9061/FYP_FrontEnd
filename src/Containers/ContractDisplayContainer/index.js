import React, {useState, useEffect}  from "react";
import Dashboard from "../../Components/Dashboard";
import OrganizerContractsTable from "../../Components/OrganizerContractsTable";
import { Container, Grid, Paper, IconButton } from "@mui/material";
import axios from "axios";
import {BACKEND_URL} from "../../Utils/auth";
import { useAuth } from "../../Utils/auth";

const ContractDisplay = (props) => {

  const [contractsData,setcontractsData] = useState([]);
  const auth = useAuth();
  
  async function getContractsData() {
    await axios
      .get(BACKEND_URL+"get_organizer_contract_data", {params: {userID: auth.user?auth.user.account_address:null}})
      .then((response) => {
        console.log("from organizer contract container:",response.data);
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
    "Model/Data Description",
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