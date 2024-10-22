import React from "react";
import { useSelector } from "react-redux";
import Preloader from "../common/Preloader/Preloader.tsx";
import { getIsFetching } from "../../redux/users-selectors.ts";
import { Users } from "./Users.tsx";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.tsx"; // Adjust the import path accordingly
import { compose } from 'redux';

type UsersPagePropsType = {
    pageTitle: string;
};

const UsersPageComponent: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching);
    console.log('Rendering UsersPage with props:', props); // Debug log
    
    return (
        <>
            <h2>{props.pageTitle}</h2>
            {isFetching ? <Preloader /> : null}
            <Users />
        </>
    );
};

// Wrap the UsersPageComponent with the withAuthRedirect HOC
export const UsersPage = compose<React.ComponentType>(
    withAuthRedirect
)(UsersPageComponent);
