import axios from "axios";
const JSON_SERVER_HOST = "http://localhost:5002";

export const getExpenses = async () => {
  try {
    const respone = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return respone.data;
  } catch (error) {
    alert(respone?.data?.message);
  }
};

export const getExpense = async ({ queryKey }) => {
  try {
    const respone = await axios.get(
      `${JSON_SERVER_HOST}/expenses/${queryKey[1]}`
    );
    return respone.data;
  } catch (error) {
    alert(respone?.data?.message);
  }
};

export const postExpense = async (newExpense) => {
  try {
    const respone = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return respone.data;
  } catch (error) {
    console.log(error);
    alert(respone?.data?.message);
  }
};

export const putExpense = async (updateExpense) => {
  const { id, ...rest } = updateExpense;
  try {
    const respone = await axios.put(`${JSON_SERVER_HOST}/expenses/${id}`, rest);
    return respone.data;
  } catch (error) {
    console.log(error);
    alert(respone?.data?.message);
  }
};

export const deleteExpense = async (id) => {
  try {
    const respone = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return respone.data;
  } catch (error) {
    console.log(error);
    alert(respone?.data?.message);
  }
};
