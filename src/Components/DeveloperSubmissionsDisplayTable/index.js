import React, {useState} from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import {IconButton, Modal, Box, Typography} from "@mui/material";
import PublishIcon from '@mui/icons-material/Publish';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import CloseIcon from '@material-ui/icons/Close'
import DeveloperFormModal from '../Forms/developerForm';


function preventDefault(event) {
  event.preventDefault();
}



const SubmitDataIcon = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return(
      <div>
      <IconButton onClick={handleOpen}>
          <PublishIcon fontSize="medium"/>
      </IconButton>
      <DeveloperFormModal open={open} handleOpen={handleOpen} handleClose={handleClose} contractAddress={props.contractAddress} userID={"1234"}/>
      </div>
  )
}

export default function DeveloperSubmissionsDisplayTable(props) {

  const data = props.data!==[] ? props.data : [{
    wallet_address:"1234",
    contract_address:"1234",
    accuracy:"50",
    reward_earned:"30"
  }];

  return (
    <React.Fragment>
      <Title>{"User"} Submissions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {
              props.columnNames?
             props.columnNames.map((element)=>
              <TableCell>{element}</TableCell>
             ) 
            :null
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <TableRow key={index}>
              <TableCell>{row.contract_address}</TableCell>
              <TableCell>{row.accuracy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}