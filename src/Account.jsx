import MainLayout from './components/layouts/MainLayout'

function Account(props) {
    return (
        <MainLayout>
            <div>
                <h1>Your account id: {props.match.params.id}</h1>
            </div>
        </MainLayout>
    )
}

export default Account
