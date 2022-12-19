const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // { id: 1, photoUrl:'https://lh5.googleusercontent.com/-3iQdpASpRAw/AAAAAAAAAAI/AAAAAAAABdg/FuFk5HBQzg8/photo.jpg?sz=250' , followed: true, fullName: 'Artur', status: 'I am a progger', location: { city: 'Rybnitca', country: 'PMR' } },
        // { id: 2, photoUrl:'https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg' , followed: false, fullName: 'Daniil', status: 'I am a gamer', location: { city: 'Moskow', country: 'Russia' } },
        // { id: 3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbPjR2WaEXc563Nybz1G8j-zPLc4Imxu8devqnXFUf16HkG90NQiaoLdN2H2WdPONQKI&usqp=CAU' , followed: true, fullName: 'Andrew', status: 'I am a producer', location: { city: 'Cishinau', country: 'Moldova' } }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [ ...state.users, ...action.users ]
            }
        }
        default:
            return state;
    }

}
export const followAC = (userId) => ({
    type: FOLLOW,
    userId
})

export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
})

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
})

export default usersReducer;