import {actions} from "../../../redux/profile-reducer.ts";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts.tsx";
import {connect} from "react-redux";
import {AppStateType} from '../../../redux/redux-store';

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;