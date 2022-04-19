import {useState,useContext,createContext} from "react";

const AuthContext = createContext();
export const BACKEND_URL="http://91fd-2402-3a80-164e-77eb-344f-2518-e966-5f4d.ngrok.io/";
export const AuthProvider = ({children})=>{

const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null));

return (
    <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>

)
}

export const useAuth = ()=> useContext(AuthContext);