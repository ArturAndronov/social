import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { InjectedFormProps, reduxForm } from "redux-form";
import { required } from '../../utils/validators/validators.ts';
import { createField, GetStringKeys, Input } from '../common/FormsControls/FormsControls.tsx';
import { login } from '../../redux/auth-reducer.ts';
import { Navigate } from 'react-router-dom';
import style from "../common/FormsControls/FormsControls.module.css"
import { AppStateType } from '../../redux/redux-store.ts';

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input, {type: "email"})}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {/* если присутствует каптча , то покажеттся картинка и поле для ввода */}
            { captchaUrl && <img src={captchaUrl} alt='captcha'/>} 
            { captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {}) }   

            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
  }
  type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>
  
export const Login: React.FC = () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {

        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Navigate replace to="/profile"/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}

export default connect(null, { login })(Login);