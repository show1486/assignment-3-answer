import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../lib/api/auth'
const SignIn = ({setUser}) => {
    const [id , setId] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate();
const handlechange = async() => {
   const re =  await login({
        id, 
        password,
    })
    const {nickname, userId, avatar} = re.data
    setUser({nickname, userId, avatar})
}



  return (
    <>
    <div>
    <label htmlFor="id">아이디</label>
    <input type="text" onChange={(e)=>setId(e.target.value)} placeholder='아이디'/>
    </div>
    <div>
    <label htmlFor="password">비밀번호</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='비밀번호'/>
    </div>
    <button onClick={handlechange}>로그인</button>
    <button onClick={()=>navigate("/sign_up")}>회원가입</button>
    </>    
  )
}

export default SignIn
