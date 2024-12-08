import React, { Component, Suspense } from 'react';
import './App.css';
import {
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom';

import { Header } from './components/Header/Header.tsx';
import Login from './components/Login/Login.tsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import { initializeApp, actions as appActions } from './redux/app-reducer.ts';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader.tsx';
import { AppStateType } from './redux/redux-store.ts';
import { withSuspens } from './hoc/withSuspense.tsx';
import { UsersPage } from './components/Users/UsersContainer.tsx';

import {
  TeamOutlined,
  NotificationOutlined,
  UserOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';
import { Layout, Menu} from 'antd';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.tsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.tsx'));
const ChatPage = React.lazy(() => import('./pages/chat/ChatPage.tsx'));

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
  toggleDrawer: () => void;
  setIsMobile: (isMobile: boolean) => void;
};

const SuspendedDialogs = withSuspens(DialogsContainer);
const SuspendedProfile = withSuspens(ProfileContainer);
const SuspendedChat = withSuspens(ChatPage);

class App extends Component<MapPropsType & DispatchPropsType> {

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    this.props.setIsMobile(isMobile);
  };

  renderMenu = () => (
    <Menu
      mode="inline"
      style={{ height: '100%' }}
      onClick={this.props.toggleDrawer} // Закрывает меню при клике на любой пункт
    >
      <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
        <Menu.Item key="1">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/dialogs">Messages</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="3" icon={<TeamOutlined />}>
        <Link to="/users">Users</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<NotificationOutlined />}>
        <Link to="/chat">Chat</Link>
      </Menu.Item>
      <Menu.Item key="5" icon={<CustomerServiceOutlined />}>
        <Link to="/music">Music</Link>
      </Menu.Item>
    </Menu>
  );

  render() {
    const { initialized, isMobile } = this.props;

    if (!initialized) {
      return <Preloader />;
    }

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header isMobile={isMobile}/>
        <Content style={{ padding: '0 50px', height: '100%' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            {isMobile ? (
              <>
              </>
            ) : (
              <Sider className="site-layout-background" width={200}>
                {this.renderMenu()}
              </Sider>
            )}
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/profile/:userId" element={<SuspendedProfile />} />
                  <Route path="/" element={<Navigate to="/profile" />} />
                  <Route path="/profile" element={<SuspendedProfile />} />
                  <Route path="/users" element={<UsersPage pageTitle="Social" />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/chat" element={<SuspendedChat />} />
                  <Route path="/dialogs" element={<SuspendedDialogs />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Suspense>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  isMobile: state.app.isMobile,
  drawerVisible: state.app.drawerVisible,
});

export default compose(
  connect(mapStateToProps, { 
    initializeApp, 
    toggleDrawer: appActions.toggleDrawer, 
    setIsMobile: appActions.setIsMobile 
  })
)(App);
