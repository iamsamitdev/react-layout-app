import AuthLayout from "./components/layouts/AuthLayout";
import DocumentTitle from "react-document-title";
import {Link} from 'react-router-dom'

function ForgotPassword() {
  return (
    <AuthLayout>
      <DocumentTitle title="ลืมรหัสผ่าน" />
        <form className="card p-4 col-md-4 offset-md-4">
            <h3 className="text-center mb-4">ลืมรหัสผ่าน</h3>
          <div className="mb-3 row">
            <label htmlFor="username" className="col-md-4 col-form-label">อีเมล์ที่ใช้ลงทะเบียน</label>
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
            <label htmlFor="submit" className="col-md-4 col-form-label"></label>
            <div className="col-md-8">
              <input
                type="submit"
                className="btn btn-primary"
                name="submit"
                id="submit"
                value="ส่งข้อมูล"
              />
            </div>
          </div>
          <div className="mb-2 row">
            <label htmlFor="" className="col-md-4 col-form-label"></label>
            <div className="col-md-8"><Link to="/login">เข้าสู่ระบบ</Link></div>
          </div>
        </form>
    </AuthLayout>
  );
}

export default ForgotPassword;
