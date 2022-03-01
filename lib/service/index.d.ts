import { AxiosRequestConfig, AxiosError } from "axios";
export declare const http: import("axios").AxiosInstance;
export declare function tryCatch<T, E = Error>(promise: Promise<T> | T): Promise<[null, T] | [E, null]>;
export declare function requestApi<T>(axiosConfig: AxiosRequestConfig): Promise<[null, T] | [AxiosError<any, any>, null]>;
