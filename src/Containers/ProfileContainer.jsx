import React, {useEffect, useState}  from "react";
import Dashboard from "../Components/Dashboard";
// import DisplayTable from "../../Components/DisplaySubmissionsTable";
// import PublishIcon from '@mui/icons-material/Publish';
// import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
// import DeveloperForm from "../../Components/Forms/developerForm";
// import { Container,Paper,Grid,IconButton } from "@mui/material";
// import DeveloperSubmissionsDisplayTable from "../../Components/DeveloperSubmissionsDisplayTable";
// import axios from "axios";
import {BACKEND_URL, useAuth} from "../Utils/auth";

export default function ProfileContainer () {
    return <Dashboard inside={<Profile/>} />
}

function Profile () {
    return (
        <h1>this is profile</h1>
    )
}