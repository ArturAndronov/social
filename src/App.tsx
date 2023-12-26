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

import HeaderContainer from './components/Header/HeaderContainer.tsx';
import Login from './components/Login/Login.tsx';
import Music from './components/Music/Music.jsx';
import Navbar from './components/Navbar/Navbar.tsx';
import News from './components/News/News.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.tsx';
import Settings from './components/Settings/Settings.jsx';
import UsersContainer from './components/Users/UsersContainer.tsx';
import { initializeApp } from './redux/app-reducer.ts';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader.tsx';
import { AppStateType } from './redux/redux-store.ts';
import { withSuspens } from './hoc/withSuspense.tsx';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.tsx'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

const SuspendedDialogs = withSuspens(DialogsContainer)
const SuspendedProfile = withSuspens(ProfileContainer)

class App extends Component<MapPropsType & DispatchPropsType> {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized){
      return <Preloader />
    }


    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<div>LOADING....</div>}>
            <Routes>
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path='/profile' element={<SuspendedProfile />} />
              <Route path='/users' element={<UsersContainer pageTitle='Social'/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/dialogs' element={<SuspendedDialogs />} />
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

const mapStateToProps = (state: AppStateType) => ({
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
