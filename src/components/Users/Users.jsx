import React from "react";
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0){
    props.setUsers([
        { id: 1, photoUrl: 'https://lh5.googleusercontent.com/-3iQdpASpRAw/AAAAAAAAAAI/AAAAAAAABdg/FuFk5HBQzg8/photo.jpg?sz=250', followed: true, fullName: 'Artur', status: 'I am a progger', location: { city: 'Rybnitca', country: 'PMR' } },
        { id: 2, photoUrl: 'https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg', followed: false, fullName: 'Daniil', status: 'I am a gamer', location: { city: 'Moskow', country: 'Russia' } },
        { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbPjR2WaEXc563Nybz1G8j-zPLc4Imxu8devqnXFUf16HkG90NQiaoLdN2H2WdPONQKI&usqp=CAU', followed: true, fullName: 'Andrew', status: 'I am a producer', location: { city: 'Cishinau', country: 'Moldova' } }
    ]
    )
}

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;