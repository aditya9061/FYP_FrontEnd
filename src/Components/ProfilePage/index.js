import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth } from '../../Utils/auth';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// const card = (
//   <React.Fragment>
//   <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         title="User Profile"
//       />
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         First Name: {auth.user.firstName}
//       </Typography>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Last Name: {auth.user.lastName}
//       </Typography>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         User address: {auth.user.account_address}
//       </Typography>
//       {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Account Balance: {auth.user.balance}
//       </Typography> */}
//       {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         First Name: {user.firstName}
//       </Typography> */}
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// );

export default function Profile() {
const auth = useAuth();
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        title="User Profile"
      />
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        First Name: {auth.user.firstName}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Last Name: {auth.user.lastName}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        User address: {auth.user.account_address}
      </Typography>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Account Balance: {auth.user.balance}
      </Typography> */}
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        First Name: {user.firstName}
      </Typography> */}
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
      </Card>
    </Box>
  );
}