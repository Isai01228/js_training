import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import App from './pages/MainPage/App';
import AboutMy from './components/aboutMy/aboutMy'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={LoginPage} path='/' exact/>
                <Route path='/cards' component={App} exact/>
                <Route path='/aboutMy' component={AboutMy} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router