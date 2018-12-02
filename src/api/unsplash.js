import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9132acf7c6b1e121f2ea59aeb67ccee944fc7e281d855ccf95c2ed2012dd75c4"
  }
});
