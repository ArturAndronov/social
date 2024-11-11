import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

// let s = {
//     'nav': 'Navbar_nav__uPE2q',
//     'item':'Navbar_item__pDDen',
//     'active': 'Navbar_asga'
// }
// let c1 = "item";
// let c2 = "active";
// // "item active"
// let classes = c1 + " " + c2;
// let classesNew= `${s.item} ${s.active}`;

const Navbar: React.FC = () => {
    return (
        <nav className={s.nav}>
            <div>
                {/* <img src='https://www.flaticon.com/svg/vstatic/svg/3917/3917559.svg?token=exp=1668514605~hmac=633ab7daa8088c1e97cf89ae93e45ac5' /> */}
                <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div>
                {/* <img src='https://cdn-icons.flaticon.com/svg/3917/3917567.svg?token=exp=1668514586~hmac=6facee7128d8ec25e12b63fce7e35444' /> */}
                <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div>
                {/* <img src='https://cdn-icons.flaticon.com/svg/3917/3917567.svg?token=exp=1668514586~hmac=6facee7128d8ec25e12b63fce7e35444' /> */}
                <NavLink to="/users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
            </div>
            <div>
                {/* <img src='https://www.flaticon.com/svg/vstatic/svg/3914/3914149.svg?token=exp=1668514767~hmac=7771cf61cc577f36e40b7c1b05546aba' /> */}
                <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div>
                {/* <img src='https://www.flaticon.com/svg/vstatic/svg/3914/3914291.svg?token=exp=1668514807~hmac=ff209fd8f4502e146fcba56b77939b54' /> */}
                <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div>
                {/* <img src='https://www.flaticon.com/svg/vstatic/svg/3917/3917058.svg?token=exp=1668514690~hmac=a40fb6fab6fb3f227767ba5bc4eeca7e' /> */}
                <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;