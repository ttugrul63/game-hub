import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: "a561c60733e54b20855039680cc0c130"
    }
})