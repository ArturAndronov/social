import React, { Component, Suspense } from 'react'
import './App.css'
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer.tsx';
import { initializeApp } from './redux/app-reducer.ts';
import { connect } from 'react-redux';
import { compose } from 'redux';
//import Preloader from './components/common/Preloader/Preloader';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {


    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<div>LOADING....</div>}>
            <Routes>
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path='/profile' element={<ProfileContainer />} />
              <Route path='/users' element={<UsersContainer pageTitle='Social'/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/dialogs' element={<DialogsContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </Suspense>
        </div>
      </div>

    )
  };
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
