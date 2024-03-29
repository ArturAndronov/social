import React from "react";
import s from './ProfileInfo.module.css';
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControls/FormsControls.tsx";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import { ProfileType } from "../../../types/types.ts";

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField<ProfileTypeKeys>("Full name", "fullName", [], Input, {type: 'fullname'})}
        </div>
        <div>
            <b>Looking for a job</b>: { createField<ProfileTypeKeys>("", "LookingForAJob", [], Input, {type: "checkbox"} )}
        </div>

        <div>
            <b>My professional skills</b>:
            { createField<ProfileTypeKeys>("My professional skills", "LookingForAJobDescriptions", [], Textarea, {type: 'lookingForAJobDescription'} )}
        </div>


        <div>
            <b>About me</b>:
            { createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea,{type: 'aboutMe'} )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
            <b>{key}: {createField(key, "contacts." + key, [], Input, {})}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({ form: "edit-profile", enableReinitialize: true, destroyOnUnmount: false })(ProfileDataForm);

export default ProfileDataFormReduxForm;