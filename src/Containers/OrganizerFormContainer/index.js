import React, {useEffect} from 'react';
import Dashboard from '../../Components/Dashboard';
import OrganizerForm from '../../Components/Forms/organizerDSForm';
import { useAuth } from '../../Utils/auth';

export default function OrganizerFormContainer() {
    const auth = useAuth();
    return <Dashboard inside={<OrganizerForm user={auth.user} />}  />;
}