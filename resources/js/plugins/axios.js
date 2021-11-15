import axios from "axios";
import router from "@/router";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status == 404) {
            console.log("dfgf");
            router.push({ name: "not-found" });
        }

        return Promise.reject(error);
    }
);

export default axios;
