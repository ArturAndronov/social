import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

import { Avatar, Button, Col, Drawer, Layout, Menu, Row } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserLogin, selectIsAuth } from '../../redux/auth-selectors.ts';
import { logout } from '../../redux/auth-reducer.ts';

export const Header: React.FC = (isMobile) => {
    const [drawerVisible, setDrawerVisible] = useState(false); // Управление Drawer
    const isAuth = useSelector(selectIsAuth);
    const login = useSelector(selectCurrentUserLogin);
    const profile = useSelector((state: any) => state.profilePage.profile);

    const dispatch = useDispatch();

    const logoutCallback = () => {
        dispatch(logout());
    };

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const renderMenu = () => (
        <Menu mode="vertical" style={{ height: '100%' }} onClick={toggleDrawer}>
            <Menu.Item key="2"><Link to="/profile">Profile</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/dialogs">Messages</Link></Menu.Item>
            <Menu.Item key="1"><Link to="/users">Users</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/chat">Chat</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/music">Music</Link></Menu.Item>
        </Menu>
    );

    const { Header } = Layout;
    return (
        <Header className='header'>
            <div className='logo' />
            <Row>
                <Col span={20}>
                    {isMobile ? (
                        <>
                            <Button
                                type="text"
                                icon={<MenuOutlined />}
                                onClick={toggleDrawer}
                                style={{ fontSize: '20px', color: 'white' }}
                            />
                            <Drawer
                                title="Navigation"
                                placement="left"
                                closable={true}
                                onClose={toggleDrawer}
                                open={drawerVisible}
                            >
                                {renderMenu()}
                            </Drawer>
                        </>
                    ) : (
                        <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1"><Link to="/users">Users</Link></Menu.Item>
                        </Menu>
                    )}

                </Col>
                <Col span={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '65px' }}>
                    {isAuth
                        ? (
                            <>
                                {profile?.photos?.large
                                    ? <img
                                        src={profile.photos.large}
                                        className={s.mainPhoto}
                                        alt='User'
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            marginLeft: '10px',
                                        }}
                                    />
                                    : <Avatar
                                        alt={login || ''}
                                        style={{ backgroundColor: '#87d068', marginLeft: '10px' }}
                                        icon={<UserOutlined />}
                                        shape="circle"
                                        size={60}
                                    />
                                }
                                <Button onClick={logoutCallback}>Log out</Button>
                            </>
                        )
                        : (
                            <>
                                <Button>
                                    <Link to={'/login'}>Login</Link>
                                </Button>
                                <Button>
                                    <Link to={'https://social-network.samuraijs.com/signUp'}>Register</Link>
                                </Button>
                            </>
                        )}
                </Col>
            </Row>
        </Header>
    );
};
