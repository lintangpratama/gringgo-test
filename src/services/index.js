import axios from "axios";

const getProvinceData = async () => {
  axios
    .get("http://34.101.172.140:3005/api/propinsi/list")
    .then((res) => res.data)
    .catch((err) => err);
};

export { getProvinceData };
