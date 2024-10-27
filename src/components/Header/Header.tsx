import React from 'react'
import { Link } from 'react-router-dom';
import s from './Header.module.css';

import { Avatar, Button, Col, Layout, Menu, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserLogin, selectIsAuth } from '../../redux/auth-selectors.ts';
import { logout } from '../../redux/auth-reducer.ts';

export type MapPropsType = {
}


export const Header: React.FC<MapPropsType> = (props) => {
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const profile = useSelector((state: any) => state.profilePage.profile); // Получаем профиль из state

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    const { Header } = Layout;
    return (
        <Header className='header'>
            <div className='logo' />
            <Row>
                <Col span={20}>
                    <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/users">Users</Link></Menu.Item>
                    </Menu>
                </Col>
                {isAuth
                    ? <Col span={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '65px' }}>
                        <div style={{ display: 'flex', marginRight: '5px' }}>
                        {profile?.photos?.large 
                                ? <img 
                                    src={profile.photos.large} 
                                    className={s.mainPhoto} 
                                    alt='User' 
                                    style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        borderRadius: '50%'  // Сделать фото круглым 
                                    }}
                                  />
                                : <Avatar 
                                    alt={login || ''} 
                                    style={{ backgroundColor: '#87d068' }} 
                                    icon={<UserOutlined />} 
                                    shape="circle" // Сделать аватар круглым
                                    size={60} // Задать размер 15x15
                                  />
                            }
                        </div>
                        <Button onClick={logoutCallback}>Log out</Button>
                    </Col>
                    : <Col span={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <Button>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                        <Button>
                            <Link to={'https://social-network.samuraijs.com/signUp'}>Register</Link>
                        </Button>
                    </Col>}
            </Row>
        </Header >


        // <header className={s.header}>
        //     <img src='https://cdn-icons-png.flaticon.com/512/5969/5969833.png' alt='logo'/>

        //     <div className={s.loginBlock}>
        //         {props.isAuth
        //             ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
        //             : <NavLink to={'/login'}>Login</NavLink>}
        //     </div>
        // </header>
    )
}