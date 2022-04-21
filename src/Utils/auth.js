import {useState,useContext,createContext} from "react";

const AuthContext = createContext();
export const BACKEND_URL="http://885c-1-38-138-160.ngrok.io/";
export const AuthProvider = ({children})=>{

const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")));
console.log(user);

return (
    <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>

)
}

export const useAuth = ()=> useContext(AuthContext);