import React, {useEffect} from 'react';
import Dashboard from '../../Components/Dashboard';
import OrganizerForm from '../../Components/Forms/organizerForm';

export default function OrganizerFormContainer() {
    return <Dashboard inside={<OrganizerForm />} />;
}