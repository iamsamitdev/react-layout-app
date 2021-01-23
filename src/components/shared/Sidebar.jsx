import {Link} from 'react-router-dom'
function Sidebar() {

    return (
        <ul className="list-group">
            <li className="list-group-item active" aria-current="true">เมนู</li>
            <li className="list-group-item">แดชบอร์ด</li>
            <li className="list-group-item"><Link to="/report?name=gmail&type=public">รายงาน</Link></li>
            <li className="list-group-item"><Link to="/account/5">บัญชี</Link></li>
            <li className="list-group-item">ตั้งค่า</li>
        </ul>
    )
}

export default Sidebar