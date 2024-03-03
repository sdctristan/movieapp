import axios from "axios";

export const appAxios = axios.create({
    baseURL:import.meta.env.VITE_MOVIE_API
})

appAxios.interceptors.request.use(config => {
    config.headers = {
        'X-RapidAPI-Key':import.meta.env.VITE_RapidAPI_KeY,
        'X-RapidAPI-Host':import.meta.env.VITE_RapidAPI_host
    }
    return config
})


export const fetcher  = () => appAxios.get()