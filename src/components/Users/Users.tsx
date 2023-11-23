import React from "react";
import Paginator from "../common/Paginator/Paginator.tsx";
import User from "./User.jsx";
import { useState } from 'react';

import { ListItemButton, ListItemText, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { UserType } from "../../types/types.ts";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
    console.log(users)
    const [value, setValue] = useState('')

    const filteredUsers = users.filter(u => {
        return u.name.toLowerCase().includes(value.toLowerCase())
    })

    const [isOpen, setIsOpen] = useState(true)

    const itemClickHandler = (e:any) => {
        setValue(e.target.textContent)
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }

    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />

        <Container sx={{ mt: "1rem" }}>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onClick={inputClickHandler}
                sx={{
                    mb: "1.5rem"
                }}
            />
            {
                value && isOpen
                    ? filteredUsers.map((u) => <ListItemButton onClick={itemClickHandler}>
                        <ListItemText primary={u.name} />
                    </ListItemButton>)
                    : null
            }
        </Container>
        <div>
            {
                filteredUsers.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
                )
            }
        </div>
    </div>
}

export default Users;