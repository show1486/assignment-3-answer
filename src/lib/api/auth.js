import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(`${AUTH_API_HOST}/register`, {
      id,
      password,
      nickname,
    });
    return response.data;
  } catch (error) {
    alert(error?.response?.data?.message);
  }
};

export const login = async ({ id, password }) => {
  try {
    const response = await axios.post(`${AUTH_API_HOST}/login`, {
      id,
      password,
    });

    localStorage.setItem("accessToken", response.data.accessToken);
    console.log(localStorage.getItem("accessToken"));
    return response;
  } catch (error) {
    alert(error?.response?.data?.message);
  }
};

export const getUserinfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.get(`${AUTH_API_HOST}/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  }
};
