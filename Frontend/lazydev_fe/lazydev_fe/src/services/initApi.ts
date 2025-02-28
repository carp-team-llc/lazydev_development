import AxiosClient from "./AxiosClient";

// const rootApi = AxiosClient(import.meta.env.VITE_DEV_API_HIHI_LOCAL);

const userApi = AxiosClient(import.meta.env.VITE_DEV_API_AUTHLOCAL);
const projectApi = AxiosClient(import.meta.env.VITE_DEV_API_PROJECTLOCAL);
const contributeApi = AxiosClient(import.meta.env.VITE_DEV_API_CONTRIBUTELOCAL);
export { userApi,  projectApi, contributeApi };
