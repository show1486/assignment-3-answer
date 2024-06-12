import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { getUserinfo } from "./lib/api/auth";

function App() {
  const [expenses, setExpenses] = useState([
  ]);
  const [user , setUser] = useState(null);

  useEffect(()=>{
    getUserinfo().then((res)=>{
if(res){      
  setUser({
        user_id:res.id,
        nickname:res.nickname,
        avatar:res.avatar,
      
  })
}
    }
    )
  },[])
  console.log(user);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home expenses={expenses} setExpenses={setExpenses} />}
          />
          <Route
            path="/detail/:id"
            element={<Detail expenses={expenses} setExpenses={setExpenses} />}
          />
          <Route path="/sign_in" element={<SignIn setUser={setUser}/>}/>
          <Route path="/sign_up" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
