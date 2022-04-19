import React, {useEffect, useState} from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Chart from '../../Components/Chart';
import Deposits from '../../Components/Deposits';
import Orders from '../../Components/DisplaySubmissionsTable';
import { TableCell, TableRow } from '@mui/material';
import Dashboard from '../../Components/Dashboard';
import axios from 'axios';
import DisplayTable from '../../Components/DisplaySubmissionsTable';
import {BACKEND_URL} from "../../Utils/auth";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }






function HomeContainer(props) {

    const [chartData,setChartData] = useState(null);
    const [tableData,setTableData] = useState([]);
    
    async function getAccuracyChartData(contractAddress) {
     await axios.post(BACKEND_URL+"get_accuracies_and_submissions",{params:{contract_address:contractAddress}}).then((response)=>{
        console.log(response.data);
        setChartData(response.data.accuracy_response);
        setTableData(response.data.submission_response)
      }).catch((response) => {
        console.log(response);
    })
    // .finally(() => {
    //     setChartData(response.data.accuracy_response)
    //     console.log("i should go second");
    // });
    }

  //  async function getTableData() {
  //  axios.get(BACKEND_URL+"/get_submissions").then((response)=>{
  //       console.log("TableData",response.data);
  //       setTableData(response.data.submission_response);
  //     }).catch((response)=>{
  //       console.log(response);
  //     })
    //   .finally(() => {
    //     console.log("Response",response);
    //     setTableData(response.data.submission_response);
    // });
    // }

    useEffect(()=>{
      getAccuracyChartData(props.contract.contract_address);
    },[]);
 

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 302,
                  }}
                >
                  <Chart data={chartData}/>
                </Paper>
              </Grid>
        
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 252,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid> */}
           
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <DisplayTable columnNames={["Wallet Address","Contract Address","Base Accuracy","Current Accuracy","Reward"]} data={tableData}/>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
    );
}


export default function HomeContainer1(props){
  return <Dashboard inside={<HomeContainer contract={props.contract} />} />;
};