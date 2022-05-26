import {useState,useContext,createContext} from "react";

const AuthContext = createContext();
export const BACKEND_URL="http://9832-2402-3a80-745-8037-5dd8-f6f8-7067-d3a2.ngrok.io/";
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