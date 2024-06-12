import React, { useState } from 'react'
import { updateProfile } from '../lib/api/auth'
import { useNavigate } from 'react-router-dom'

const Profile = ({setUser,user}) => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState("")
    const [avatar, setAvatar] = useState(null)
    const handleUpdate = async()=>{
        const formData = new FormData()
        formData.append("nickname",nickname)
        formData.append("avatar",avatar)
        const res = await updateProfile(formData)
        if(res.success){
        setUser({...user, nickname: res.nickname, avatar: res.avatar})
        navigate("/")
    }
    }
  return (
    <>
    <div style={{
    display:"flex", flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"20px",
        minWidth:"1344px"
}}>
    <label htmlFor="nickname">닉네임</label>
      <input type="text"
        onChange={(e)=>setNickname(e.target.value)}
      />
      <label htmlFor="image">이미지변경</label>
      <input type="file"
      accept='image/*'
        onChange={(e)=>setAvatar(e.target.files[0])}
      />
          <button onClick={handleUpdate}>프로필 업데이트</button>

    </div>
    </>
  )
}

export default Profile
