import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../lib/api/auth'
const SignUp = () => {
    const [id , setId] = useState("")
    const [password , setPassword] = useState("")
    const [nickname, setNickname] = useState("")
    const navigate = useNavigate();

    const handleAdd = async ()=>{
        if(id.length < 3 || id.length > 10){
            alert("아이디를 3글자이상 10글자 미만으로 작성해 주세요")
            return;
        }else if(password.length < 4 || password.length > 15){
            alert("비밀번호를 3글자이상 10글자 미만으로 작성해 주세요")
            return;
        }
        else if(nickname.length < 3 || nickname.length >10){
            alert("닉네임을 3글자이상 10글자 미만으로 작성해 주세요")
            return;
        }

       const re = await register ({
            id,
            password,
            nickname
        })
        if(re){
            alert(`${re?.data?.message}`);
            navigate("/sign_in");
        }
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
    <div>
    <label htmlFor="nickname">닉네임</label>
    <input type="text" onChange={(e)=>setNickname(e.target.value)} placeholder='닉네임'/>
    </div>
    <button onClick={handleAdd}>회원가입</button>
    <button onClick={()=>navigate("/sign_in")}>돌아가기</button>
    </>    
  )
}

export default SignUp
