import React, {useEffect} from 'react'

function NotFoundPage() {

    useEffect(() => {
        document.title = 'Page not found'
    })

    return (
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <h3>Page not found 404 error</h3>
        </div>
    )
}

export default NotFoundPage
