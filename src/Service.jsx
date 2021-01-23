import MainLayout from './components/layouts/MainLayout'
import DocumentTitle from 'react-document-title';
function Service() {
    return (
        <MainLayout>
            <DocumentTitle title='Service' />
            <div className="jumbotron">
                <h1 className="display-6">บริการของเรา</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, molestias corrupti porro dignissimos aspernatur rerum quam ea cum officia culpa adipisci, voluptates maxime tempora harum esse, minima obcaecati quibusdam. Illum.</p>
            </div>
        </MainLayout>
    )
}

export default Service