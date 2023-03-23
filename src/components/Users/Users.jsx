import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { useState } from 'react';

import { ListItemButton, ListItemText, TextField } from '@mui/material';
import { Container } from '@mui/system';


let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

    const [value, setValue] = useState('')

    const filteredUsers = users.filter(u => {
        return u.name.toLowerCase().includes(value.toLowerCase())
    })

    const [isOpen, setIsOpen] = useState(true)

    const itemClickHandler = (e) => {
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