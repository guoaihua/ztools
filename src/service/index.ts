import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
export const http = axios.create({
    timeout: 30000,
    withCredentials: true,
})


http.interceptors.response.use(
    (res: AxiosResponse) => {
        return res
    },
    (err: AxiosError) => {
        // 自定义错误信息
        return Promise.reject({
            rawError: err,
            code: -1
        })
    }
)

export async function tryCatch<T, E = Error>(promise: Promise<T> | T): Promise<[null, T] | [E, null]> {
    try {
        const res = await promise
        return [null, res]
    } catch (e: any) {
        return [e, null]
    }
}



export function requestApi<T>(axiosConfig: AxiosRequestConfig) {
    return tryCatch<T, AxiosError>(http(axiosConfig).then(res => res.data))
}

