import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import axios from "axios";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {BACKEND_URL, useAuth} from "../../Utils/auth";

class DeveloperForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "",
      data_sent:0,
      train:0,
      response:null
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleTrain = this.handleTrain.bind(this);
  }

  handleTrain(event){
    event.preventDefault();
    const data = new FormData();

    data.append("contractAddress",this.props.contractAddress);
    data.append("train",1);
    data.append("userID", this.props.userID);

    axios.post(BACKEND_URL+"train",data,
    {headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin":"*",
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    }}).then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
   
    data.append("dataFile", this.uploadValidationData.files[0]);
    data.append("contractAddress",this.props.contractAddress);
    data.append("userID", this.props.userID);
    
    axios.post(BACKEND_URL+"add_data_from_client", 
    data,
    {headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin":"*",
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    }}
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      
      <Card variant="outlined">
      <CardContent>
      <form onSubmit={this.handleUploadImage}>
        <label>
        Data:
          <input
            ref={(ref) => {
              this.uploadValidationData = ref;
            }}
            type="file"
            name="dataFile"
          />
        </label>
        <div>
          <button type="submit">Upload</button>
        </div>
        <div>
          <button onClick={this.handleTrain}>Train</button>
        </div>
      </form>
      </CardContent>
      </Card>
    );
  }
}

export default function DeveloperFormModal(props) {
  
  const auth = useAuth();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Data Submission Form
          </Typography>
          <DeveloperForm contractAddress={props.contractAddress} userID={auth.user.account_address}/>
        </Box>
      </Modal>
    </div>
  );
}