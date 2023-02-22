import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.router.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUsersProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.router.params.userId != prevProps.router.params.userId){
      this.refreshProfile();
    }
    
  }


  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}
        isOwner={!this.props.router.params.userId}
        status={this.props.status}
        updateStatus={this.props.updateStatus} 
        savePhoto={this.props.savePhoto}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}

export default compose(connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus,savePhoto, saveProfile }),withAuthRedirect) (withRouter(ProfileContainer));