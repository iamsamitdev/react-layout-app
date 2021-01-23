import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";

function MainLayout({children}) {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row navpadding">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        {children} 
                    </div>
                </div>
            </div>
            <Footer />  
        </div>
    )
}

export default MainLayout
