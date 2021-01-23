import React,{useState, useEffect} from 'react'
import AuthLayout from "./components/layouts/AuthLayout";
import DocumentTitle from "react-document-title";
import {Link, useHistory} from 'react-router-dom'

function Login() {

  let history = useHistory();

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  // ฟังก์ชันสำหรับรับค่าเมื่อผู้ใช้ป้อนข้อมูลในฟอร์ม
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username)
    console.log(password)
    // ตรวจถ้า login ถูกต้อง
    if(username=="admin" && password=="1234"){
      // ส่งไปหน้าหลัก
      history.push('/home')
    }else{
      alert('ข้อมูลเข้าระบบไม่ถูกต้อง')
    }
  }

  useEffect(()=>{
    document.title = "เข้าสู่ระบบ"
  })
  

  return (
    <AuthLayout>
      {/* <DocumentTitle title="เข้าสู่ระบบ" /> */}
        <form className="card p-4 col-md-4 offset-md-4" onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>
          <div className="mb-3 row">
            <label htmlFor="username" className="col-md-4 col-form-label">ชื่อผู้ใช้</label>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={e => setusername(e.target.value)}
                name="username"
                id="username"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-md-4 col-form-label">รหัสผ่าน</label>
            <div className="col-md-8">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={e => setpassword(e.target.value)}
                name="password"
                id="password"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="submit" className="col-md-4 col-form-label"></label>
            <div className="col-md-8">
              <input
                type="submit"
                className="btn btn-primary"
                name="submit"
                id="submit"
                value="เข้าสู่ระบบ"
              />
            </div>
          </div>
          <div className="mb-2 row">
            <label htmlFor="" className="col-md-4 col-form-label"></label>
            <div className="col-md-8"><Link to="/forgotpassword">ลืมรหัสผ่าน ?</Link></div>
          </div>
          <div className="mb-2 row">
            <label htmlFor="" className="col-md-4 col-form-label"></label>
            <div className="col-md-8"><Link to="/register">ลงทะเบียน</Link></div>
          </div>
        </form>
    </AuthLayout>
  );
}

export default Login;
