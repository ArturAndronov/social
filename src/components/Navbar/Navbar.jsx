import s from './Navbar.module.css';
console.log(s)
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

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}
export default Navbar;