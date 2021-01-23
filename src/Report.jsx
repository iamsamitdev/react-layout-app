import MainLayout from './components/layouts/MainLayout'
import { useLocation } from 'react-router-dom';

function Report() {

    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
    const type = new URLSearchParams(search).get('type');

    return (
        <MainLayout>
            <div>
                <h1>Your report param</h1>
                <h2>name={name}</h2>
                <h2>type={type}</h2>
            </div>
        </MainLayout>
    )
}

export default Report
