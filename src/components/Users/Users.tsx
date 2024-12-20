import React, { useEffect } from "react";
import Paginator from "../common/Paginator/Paginator.tsx";
import User from "./User.tsx";

import { FilterType, requestUsers, follow as followUser, unfollow as unfollowUser } from '../../redux/users-reducer.ts';
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from "../../redux/users-selectors.ts";

import { UsersSearchForm } from "./UsersSearchForm.tsx";


type PropsType = {}

export const Users: React.FC<PropsType> = (props) => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)
    const statusUser = useSelector((state: any) => state.profilePage.status)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    // Переименовал функции `follow` и `unfollow` на `handleFollow` и `handleUnfollow`
    const handleFollow = (userId: number) => {
        dispatch(followUser(userId))
    }

    const handleUnfollow = (userId: number) => {
        dispatch(unfollowUser(userId))
    }

    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged} />

            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount} pageSize={pageSize} />

            <div>
                {users.map(u => (
                    <User 
                        user={u}
                        followingInProgress={followingInProgress}
                        key={u.id}
                        unfollow={handleUnfollow}  // Используем `handleUnfollow`
                        follow={handleFollow} 
                        status = {statusUser}     // Используем `handleFollow`
                    />
                ))}
            </div>
        </div>
    )
}
