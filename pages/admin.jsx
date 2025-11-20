import { Input } from '@mui/material'
import {useState , useEffect} from 'react'



const Admin = () =>{

    const [userInfo , setUserInfo] = useState({
        username:"",
        password:""
    });

    const [checking , setChecking] = useState(false);


    useEffect(()=>{
        if(checking){
            //do wait for now
            console.log("checking")
        }       
    },[checking])


    useEffect(()=>{
        setTimeout(()=>{
            window.location.href = window.location.origin
        }, 3000)
    })

    const handleUserNameChange = (e) =>{
        // console.log(value)
        setUserInfo((prev)=> {
            return {...prev , username:e.target.value}
        })
    }

    const handlePasswordChange = (e) =>{
        // console.log(value)
        setUserInfo((prev)=> {
            return {...prev , password:e.target.value}
        })
    }

    const handleValidation = async()=>{
        if(!userInfo.username.trim() || !userInfo.password.trim()){
            alert("Fields cannot be empty!!")
            return
        }

        setChecking(true);
        const username = userInfo.username.trim();
        const password = userInfo.password.trim();

        const verfiyCred = await handleVerifyCred({username , password});

    }

    const handleVerifyCred = async ({username , password})=>{
        const response = await fetch('http://localhost:3001/api/v1/users/login',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        })

        const data = await response.json();

        if(!data.user){
            alert(data.message)
            return
        }

        console.log(data.user.username)

        //save info in local storage

        // localStorage.setItem('username' , data.user.username);
        // localStorage.setItem('token', data.token);

        // console.log(data)
    }




    return(
        <div>
            <h1>Work in progress....(Redirecting to home)</h1>
            {/* <div>
                <Input value={userInfo.username}
                    onChange={handleUserNameChange}
                    placeholder='enter username'
                    required
                >Username</Input>
                <br></br>
                <Input value={userInfo.password}
                    onChange={handlePasswordChange}
                    placeholder='enter password'
                    required
                >Username</Input>

                <br></br>
                <button onClick={handleValidation} id="login-btn">Login</button>
            </div> */}
        </div>
    )
}


export default Admin