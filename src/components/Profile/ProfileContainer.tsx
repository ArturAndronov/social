import React from 'react'
import Profile from './Profile.tsx';
import { connect } from 'react-redux';
import { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer.ts';
import {
  NavigateFunction,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.tsx';
import { AppStateType } from '../../redux/redux-store.ts';
import { ProfileType } from '../../types/types.ts';

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
  getUsersProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

type withRouterProps = {
  router: {
    location: Location;
    navigate: NavigateFunction;
    params: Record<string, string | undefined>;
  };
}

type PropsType = MapPropsType & DispatchPropsType & withRouterProps

class ProfileContainer extends React.Component<PropsType>{

  refreshProfile() {
    let userId: number | null = +this.props.router.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;
    }

    if (!userId){
      console.error("ID should exists in URI params or in state")
    }
    else{
      this.props.getUsersProfile(userId);
    this.props.getStatus(userId);
    }

  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if(this.props.router.params.userId !== prevProps.router.params.userId){
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

let mapStateToProps = (state: AppStateType) => ({
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

export default compose<React.ComponentType>(connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus,savePhoto, saveProfile }),withAuthRedirect) (withRouter(ProfileContainer));