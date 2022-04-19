import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Title';

function preventDefault(event) {
  event.preventDefault();
}

const index_to_month = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December" ];

export default function Deposits() {
    var date = new Date()
  return (
    <React.Fragment>
      <Title>Balance</Title>
      <Typography component="p" variant="h4">
      24.000000ETH
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {date.getDate()}<sup>th</sup> {index_to_month[date.getMonth()-1]}, {date.getFullYear()} 
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}