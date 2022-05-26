import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import axios from "axios";
import {BACKEND_URL, useAuth} from "../../Utils/auth";
import LinearProgress from '@mui/material/LinearProgress';

class OrganizerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upload:false,
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.setUpload = this.setUpload.bind(this);
    // this.handleModelPull = this.handleModelPull.bind(this)
    // console.log("here too", this.props);
  }

//   handleModelPull(event){
//     event.preventDefault();
//     const data = new FormData();
//     data.append("contractAddress","0x6910484b214Effa7Ea92F92c958FE365F57b8fd4");
//     axios.post(BACKEND_URL+"model_pull",
//     data,
//     {headers:{
//       "Content-Type": "multipart/form-data",
//       "Access-Control-Allow-Origin":"*",
//       'Access-Control-Allow-Methods': '*',
//       'Access-Control-Allow-Headers': '*'
//     }},
//     { responseType: 'blob' }
// ).then(function (response) {
//     console.log(response.data);
//     const downloadUrl = window.URL.createObjectURL(new Blob([response.data],{type:"application/octet-stream"}));
//     const link = document.createElement('a');
//     link.href = downloadUrl;
//     link.setAttribute('download', 'file.h5'); //any other extension
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//     }
// );
//   }
  setUpload (value){
    this.setState({
      upload:value
    })
  }
  handleUploadImage(ev) {
    ev.preventDefault();
    this.setState({upload:true});
    console.log("Upload Status",this.state.upload);
    const data = new FormData();
    data.append("modelFile", this.uploadModelFile.files[0]);
    data.append("validationDataFile", this.uploadValidationData.files[0]);
    data.append("contractName", this.uploadModelName.value);
    data.append("modelDescription", this.uploadModelDescription.value);
    data.append("contractName", this.uploadModelName.value);
    data.append("reward", this.uploadReward.value);
    this.props.user?data.append("userID", this.props.user.account_address):data.append("userID","placeHolder");
    
    // console.log("organizer form", data.getAll());
    axios.post(BACKEND_URL+"submit_contract", 
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
      // if(response){}
    })
    .catch(function (error) {
      console.log("Error",error);
    })
    .then(()=>
      this.setState({upload:false})
    );
  }

  render() {
    return (
      <div>
      <div style={{height:"40px"}}>
      </div>
      <Box sx={{ width: '40%', margin:'0 auto'}}>
      { this.state.upload?
      <LinearProgress />:
      null
      }
    </Box>
    <div style={{height:"40px"}}></div>
      <Box
       sx={{
        width: "40%",
        height: 700,
        marginLeft:"30%",
        marginTop:"10%",
        margin:"0 auto"

      }}
      >
      <Card variant="outlined">
      <CardContent>
      <form onSubmit={this.handleUploadImage}>
        <label>
          Contract Name:
          <input
            ref={(ref) => {
              this.uploadModelName = ref;
            }}
            type="text"
            name="contractName"
          />
        </label>
        <br />
        <label>
          Model/Data Description:
          <input 
          ref={(ref) => {
              this.uploadModelDescription = ref;
            }}
          type="text" 
          name="modelDescription" />
        </label>
        <br />
        <label>
        Model File:
          <input
            ref={(ref) => {
              this.uploadModelFile = ref;
            }}
            type="file"
          
          />
        </label>
        <br />
        <label>
        Validation Data:
          <input
            ref={(ref) => {
              this.uploadValidationData = ref;
            }}
            type="file"
            name="validationDataFile"
          />
        </label>
        <br />
        <label>
          Reward:
          <input 
          ref={(ref) => {
              this.uploadReward = ref;
            }}
          type="number" name="reward" />
        </label>
        <br />
        <div>
          <button>Upload</button>
        </div>
        {/* <div>
          <button onClick={this.handleModelPull}>Model Pull</button>
        </div> */}
      </form>
      </CardContent>
      </Card>
      </Box>
      </div>
    );
  }
}

export default OrganizerForm;
