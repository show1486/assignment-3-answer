import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { getUserinfo } from '../lib/api/auth'
import { useEffect } from 'react'
import styled from 'styled-components'

const NavItem = styled(Link)`

`
const Layout = ({user, setUser}) => {
 const navigate = useNavigate();

    useEffect(()=>{
        getUserinfo().then((res)=>{
    if(res){      
      setUser({
            user_id:res.id,
            nickname:res.nickname,
            avatar:res.avatar,
          
      })
    }else{
        handleLogout()
}
        }
        )
      },[])

      const handleLogout = ()=>{
        setUser(null)
        navigate("/sign_in")
        localStorage.clear()
      }

  return (
    <>
      <nav style={{
        display:"flex",
        backgroundColor:"green",
        width:"1344px",
        position:"fixed",
        top:"0",
        justifyContent:"space-between",
        zIndex:"1000",
        alignItems:"center"}}>
            네비게이션 바
        <div>
        <NavItem to="/">HOME</NavItem>
        <NavItem to="profile">내 프로필</NavItem>
        </div>
        {user && <div>
            {user.nickname}
            {<img src={user.avatar} style={{width:"30px",height:"30px", borderRadius:"20px"}}/>}
            <button style={{
            backgroundColor:"pink",
            display:"flex"
        }}onClick={handleLogout}>로그아웃</button>
        </div>}
            
       
        </nav>
        
      <Outlet/>
    </>
  )
}

export default Layout
