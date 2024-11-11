import axios from "axios"

// export const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers: {
//          "API-KEY": "a62b3253-f692-4c22-89ff-b39997f0c6dd"
//         // "API-KEY": "80777132-806b-4861-9d3c-87225dd5c41d"
//     }
// });

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

// Динамическая установка API-ключа
instance.interceptors.request.use((config) => {
    const currentApiKey = localStorage.getItem("api_key") || "a62b3253-f692-4c22-89ff-b39997f0c6dd";
    config.headers["API-KEY"] = currentApiKey;
    return config;
});


export enum ResultCodesEnum {
 Success = 0,
 Error = 1
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
   }

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
