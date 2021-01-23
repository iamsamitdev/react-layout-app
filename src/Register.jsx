import AuthLayout from "./components/layouts/AuthLayout";
import DocumentTitle from "react-document-title";
import {Link} from 'react-router-dom'
function Register() {
  return (
    <AuthLayout>
      <DocumentTitle title="ลงทะเบียน" />
      <form className="card p-4 col-md-4 offset-md-4">
        <h3 className="text-center mb-4">ลงทะเบียน</h3>
        <div className="mb-3 row">
          <label htmlFor="fullname" className="col-md-4 col-form-label">
            ชื่อ-สกุล
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="fullname"
              id="fullname"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="email" className="col-md-4 col-form-label">
            อีเมล์
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="username" className="col-md-4 col-form-label">
            ชื่อผู้ใช้
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-md-4 col-form-label">
          รหัสผ่าน
          </label>
          <div className="col-md-8">
            <input
              type="password"
              className="form-control"
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
              value="ลงทะเบียน"
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label htmlFor="" className="col-md-4 col-form-label"></label>
          <div className="col-md-8">
          <Link to="/login">เข้าสู่ระบบ</Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Register;
