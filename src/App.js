import {useEffect, useState} from 'react';
import Web3 from 'web3';
import axios from 'axios';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import SignInSide from './Components/SignIn';
import reportWebVitals from './reportWebVitals';
import OrganizerForm from './Components/Forms/organizerForm';
import DeveloperForm from './Components/Forms/developerForm';
import OrganizerFormContainer from './Containers/OrganizerFormContainer';
import {AuthProvider, BACKEND_URL} from './Utils/auth.js';
import ContractDisplayContainer from './Containers/ContractDisplayContainer';
import HomeContainer1 from './Containers/HomeContainer';
import DeveloperContractDisplayContainer from './Containers/DeveloperContractContainer';
import DeveloperSubmissionDisplayContainer from "./Containers/DeveloperSubmissionsContainer";

function App() {

 
  const [userData, setUserData] = useState({
    account:"",
    firstName:"",
    lastName:""
  });
  
  const [contractsData,setcontractsData] = useState([]);
  
  async function getContractsData() {
    await axios
      .get(BACKEND_URL+"/get_contract_data")
      .then((response) => {
        console.log(response.data);
        setcontractsData(response.data.contract_data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(()=>{
    getContractsData();
  },[])

  
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/organizerContractsDisplayContainer" element={<ContractDisplayContainer />} />
      <Route path="/signup" element= {<SignUp accounts={userData.account}/>}/>
      <Route path="/signin" element= {<SignInSide/>}/>
      <Route path="/organizerFormContainer" element={<OrganizerFormContainer/>}/>
      <Route path="/developerContractsDisplayContainer" element={<DeveloperContractDisplayContainer contractsData={contractsData}/>} />
      <Route path="/developerSubmissionsDisplayContainer" element={<DeveloperSubmissionDisplayContainer/>}/>
      {contractsData.map((contract,index)=>{
        const path = "/"+contract.contract_address;
        return (<Route key={contract.contract_address} exact={true} path={path} element={<HomeContainer1 contract={contract} />} />);
      })}
    </Routes>
    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
