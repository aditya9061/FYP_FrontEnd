import  React from 'react';
import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import {IconButton} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import axios from 'axios';
import {BACKEND_URL, useAuth} from "../../Utils/auth";


function preventDefault(event) {
  event.preventDefault();
}

const TrainDataIcon = (props) => {

  const auth = useAuth();

  function handleModelPull(event){
    event.preventDefault();
    const data = new FormData();
    data.append("contractAddress",props.contractAddress);
    data.append("userID", auth.user.account_address)
    axios.post(BACKEND_URL+"model_pull",
    data,
    {headers:{
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin":"*",
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    }},
    { responseType: 'blob' }
).then(function (response) {
    // console.log(response.data);
    const downloadUrl = window.URL.createObjectURL(new Blob([response.data],{type:"application/octet-stream"}));
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'file.h5'); //any other extension
    document.body.appendChild(link);
    link.click();
    link.remove();
    }
);
  }

  return(
      <IconButton onClick={handleModelPull}>
          <CloudDownloadIcon fontSize="medium"/>
      </IconButton>
  )
}
const OpenInNewTabIcon = (props) => {
  const path = "/" + props.contractAddress
  return(
    
    <IconButton onClick={()=>window.open(path)}>
      <OpenInNewIcon fontSize="medium" />
    </IconButton>
    
  )
}



export default function OrganizerContractsTable(props) {

  const data = props.data!==[]? props.data :[{
    contract_address:"1234",
    organizer_address:"1234",
    base_accuracy:"30",
    reward:"40"
  }];

  const auth = useAuth();
  
  return (
    <React.Fragment>
      <Title>{auth.user.firstName + " " + auth.user.lastName} Published Contracts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {props.columnNames?
             props.columnNames.map((element)=>
              <TableCell key={element}>{element}</TableCell>
             ) 
            :null}
            {/* <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contract,index) => (
            <TableRow key={contract.contract_address}>
              <TableCell>{contract.contract_address}</TableCell>
              <TableCell>{contract.organizer_address}</TableCell>
              <TableCell>{contract.base_accuracy}</TableCell>
              <TableCell>{contract.reward}</TableCell>
              <TableCell><OpenInNewTabIcon index={index} contractAddress={contract.contract_address}/></TableCell>
              <TableCell><TrainDataIcon contractAddress={contract.contract_address}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}