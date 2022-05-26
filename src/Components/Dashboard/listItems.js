import React, {useState} from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import PeopleIcon from '@mui/icons-material/People';
import CodeIcon from '@mui/icons-material/Code';
import OrganizerForm from '../Forms/organizerDSForm';
import { Link } from 'react-router-dom';


function MainListItems(){

const [orgOpen, setOrgOpen] = useState(false);
const [devOpen, setDevOpen] = useState(false);

const handleOrgClick = () => {
  setOrgOpen(!orgOpen);
};

const handleDevClick = () => {
  setDevOpen(!devOpen);
};

const organizer_list_array = [
  {text:"My Contracts",
    link:"/organizerContractsDisplayContainer",
    icon:<StarBorder />
},
{
  text:"Organizer Form",
    link:"/organizerFormContainer",
    icon:<StarBorder />
},
// {
//   text:"ML Contract Form",
//     link:"/organizerFormContainer",
//     icon:<StarBorder />
// },
];

const developer_list_array = [
{
  text:"Contracts Available",
  link:"/developerContractsDisplayContainer",
  icon:<StarBorder />
},
{
  text:"My Submissions",
  link:"/developerSubmissionsDisplayContainer",
  icon:<StarBorder />
}
];

return(
  <div>
    <ListItemButton onClick={handleOrgClick}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Organizer Dashboard" />
        {orgOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={orgOpen} timeout="auto" unmountOnExit>
        {
          organizer_list_array.map((element,index) => {
          return(
            <List component="div" disablePadding key={index}>
          <Link to={element.link} style={{textDecoration:"none", color:"black"}}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {element.icon}
            </ListItemIcon>
            <ListItemText primary={element.text} />
          </ListItemButton>
          </Link>
        </List>
          );
          
        })}
      </Collapse>
      <ListItemButton onClick={handleDevClick}>
      <ListItemIcon>
        <CodeIcon />
      </ListItemIcon>
      <ListItemText primary="Developer Dashboard" />
        {devOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={devOpen} timeout="auto" unmountOnExit>
      {
          developer_list_array.map((element,index) => {
          return(
            <List component="div" disablePadding key={index}>
          <Link to={element.link} style={{textDecoration:"none", color:"black"}}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {element.icon}
            </ListItemIcon>
            <ListItemText primary={element.text} />
          </ListItemButton>
          </Link>
        </List>
          );
        })}
      </Collapse>
    
    {/* <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
  </div>
  );
}

export default MainListItems;
// export const secondaryListItems = (
//   <div>
//     {/* <ListSubheader inset>S</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem> */}
//   </div>
//);