import React, { Component, Suspense } from 'react'
import './App.css'
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
  NavLink,
  Link,
} from "react-router-dom";
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer.tsx';
import Login from './components/Login/Login.tsx';
import Music from './components/Music/Music.jsx';
import Navbar from './components/Navbar/Navbar.tsx';
import News from './components/News/News.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.tsx';
import Settings from './components/Settings/Settings.jsx';
import { initializeApp } from './redux/app-reducer.ts';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader.tsx';
import { AppStateType } from './redux/redux-store.ts';
import { withSuspens } from './hoc/withSuspense.tsx';
import { UsersPage } from './components/Users/UsersContainer.tsx';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Header } from './components/Header/Header.tsx';
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu

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
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <Layout>
        <Header/>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                /*  defaultSelectedKeys={['7']}*/
                /*  defaultOpenKeys={['sub1']}*/
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                  <Menu.Item key="1"> <Link to="/profile">Profile</Link></Menu.Item>
                  <Menu.Item key="2"> <Link to="/dialogs">Messages</Link></Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Users">
                  <Menu.Item key="5"><Link to="/Users">Users</Link></Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Suspense fallback={<div>LOADING....</div>}>
                <Routes>
                  <Route path='/profile/:userId' element={<ProfileContainer />} />
                  <Route path="/" element={<Navigate to="/profile" />} />
                  <Route path='/profile' element={<SuspendedProfile />} />
                  <Route path='/users' element={<UsersPage pageTitle='Social' />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/dialogs' element={<SuspendedDialogs />} />
                  <Route path='/news' element={<News />} />
                  <Route path='/music' element={<Music />} />
                  <Route path='/settings' element={<Settings />} />
                </Routes>
              </Suspense>

            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Social Network ©2024 Created by Artur A.S.</Footer>
      </Layout>


      // <div className='app-wrapper'>
      //   <HeaderContainer />
      //   <Navbar />
      //   <div className='app-wrapper-content'>
      //     <Suspense fallback={<div>LOADING....</div>}>
      //       <Routes>
      //         <Route path='/profile/:userId' element={<ProfileContainer />} />
      //         <Route path="/" element={<Navigate to="/profile" />} />
      //         <Route path='/profile' element={<SuspendedProfile />} />
      //         <Route path='/users' element={<UsersPage pageTitle='Social'/>} />
      //         <Route path='/login' element={<Login />} />
      //         <Route path='/dialogs' element={<SuspendedDialogs />} />
      //         <Route path='/news' element={<News />} />
      //         <Route path='/music' element={<Music />} />
      //         <Route path='/settings' element={<Settings />} />
      //       </Routes>
      //     </Suspense>
      //   </div>
      // </div>

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


