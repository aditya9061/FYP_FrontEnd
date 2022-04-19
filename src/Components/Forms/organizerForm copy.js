import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function OrganizerForm() {

    const [form, setForm] = React.useState({
        contractName: '',
        modelDescription: '',
        reward: ''
    });
    function handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam == "modelFile" || nam==="validationData"){
          console.log(nam);
          console.log(event.target.value);
          const file = new FormData();
          file.append(nam,event.target.)
        }
            

        console.log(nam);
        console.log(val);
        setForm(prevValue => {
            return { ...prevValue, [nam]: val }
          });
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://b6ee-2402-3a80-164d-e03c-54a2-4717-6e07-9e63.ngrok.io/submit_contract', {
        method: 'POST',
        mode:'cors',
        headers:{
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json'
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(form)
      }).then(function(response) {
        console.log(response)
      });

      setForm({contractName: '',
      modelDescription: '',
      reward: ''});
    }

  return (
   
      <Card variant="outlined">
      <CardHeader>Organizer Form</CardHeader>
    <CardContent>
    <form onSubmit={handleSubmit}>
<label>
    Contract Name:
<input type="text" name="contractName" onChange={handleChange} />
</label>
<br />                                    
<label>
    Model File:
<input type="file" name="modelFile"  onChange={handleChange} />
</label>
<br />
<label>
    Model Description:
<input type="text" name="modelDescription" onChange={handleChange}/>
</label>
<br />
<label>
    Validation Data Directory:
<input type="file" name="validationData"   onChange={handleChange} />
</label>
<br />
<label>
    Reward:
<input type="number" name="reward"  onChange={handleChange}/>
</label>
<br />
<input type="submit" value="Start" style={{ marginLeft: '37.5%', marginTop: '8%', width: '25%' }} />
</form>
    </CardContent>
      </Card>
  
  );
}

