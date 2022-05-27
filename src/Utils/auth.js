import {useState,useContext,createContext} from "react";

const AuthContext = createContext();
export const BACKEND_URL="http://2292-1-38-140-204.ngrok.io/";
export const AuthProvider = ({children})=>{

const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")));
console.log(user);

return (
    <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>

)
}

export const useAuth = () => useContext(AuthContext);