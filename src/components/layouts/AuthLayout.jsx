function AuthLayout({children}) {
    return (
        <div className="d-flex align-items-center" 
        style={{height:'100vh', width:'100vw',backgroundColor:'orange'}}>
           {children} 
        </div>
    )
}

export default AuthLayout
