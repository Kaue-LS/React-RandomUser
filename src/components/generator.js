import { useState,useEffect } from "react"
// import App from "../App"
import User from '../components/User'
export default function Generator(){
 
    const[user,setUser] = useState([])
    const [loading,setLoading]= useState(true)
    const generateUser=()=>{
        fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then((item) => {

        setUser(item.results);
        setLoading(false);
    })
    .catch((error)=>{
        console.log(error)
        setLoading(true)
    })
    }
console.log(user)
    useEffect(()=>{
        generateUser();
    },[]);

    return(
        <div>
            {
                loading? ('Loading User')
                :(  
                    user.map((item)=>(
                        <>
                        <User user={item} ></User>
                        </>
                    ))
                    )
            }
        </div>
    )
}

