import {createContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import axios, { Axios } from 'axios';
import { data, useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user,setUser] = useState(false);
    const [showLogin,setShowLogin] = useState(false)
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)
    const navigate = useNavigate()

const loadCreditsData = async () => {
    // console.log("Calling loadCreditsData with token:", token);  
    try {
        const { data } = await axios.get(backendUrl + '/api/user/credits', {
            headers: { token }
        });

        // console.log("Credits API response:", data); 

        if (data.success) {
            setCredit(data.credits);
            setUser(data.user);
        }
    } catch (error) {
        console.log("loadCreditsData error", error);
        toast.error(error.message);
    }
}

    const generateImage = async(prompt) =>{
        try {
            const data= await axios.post(backendUrl + '/api/image/generate-image', {prompt},{headers: {token}})
            console.log(data.data)
            if(data.data.success === true){
                loadCreditsData()
                return data.data.resultImage
            } else {
                toast.error(data.message)
                loadCreditsData()
                if(data.creditBalance == 0){
                    navigate('/buy')
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }    

    const logout = ()=>{
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
    }

    useEffect(()=>{
        if(token){
            loadCreditsData()
        }
    },[token])

    const value = {
        user,setUser,showLogin,setShowLogin, backendUrl,
        token,setToken,credit,setCredit,loadCreditsData,logout,generateImage
    }

    return (
        <AppContext.Provider value = {value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider