import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service';
import Contact from './Contact';
import Account from './Account';
import Report from './Report';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import NotFoundPage from './NotFoundPage';

function App() {
    return (
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/service" component={Service} />
            <Route path="/contact" component={Contact} />
            <Route path="/account/:id" component={Account} />
            <Route path="/report" component={Report} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route component={NotFoundPage} />
        </Switch>
    )
}

export default App
