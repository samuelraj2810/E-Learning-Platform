import axios from "axios";

export const POST = async (action, params) => {
  try {
      const result = await axios.post(action, params);
      if (result.status === 200) {
        return result;
      }
  } catch (error) {
    console.error(error);
  }
};

export const GET = async (action) => {
  try {
    const token = sessionStorage.getItem("token");
    if (token) {
      const result = await axios.get(action,{
        headers: { Authorization: `Bearer ${token}` },
      });
      if (result.status === 200) {
        return result.data;
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const PUT = async (action, params) => {
  try {
    const token = sessionStorage.getItem("token");
    if (token) {
      const result = await axios.put(action, params, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (result.status === 200) {
        return result;
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const DELETE = async (action) => {
  try {
    const token = sessionStorage.getItem("token");
    if (token) {
      const result = await axios.put(action, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (result.status === 200) {
        return result;
      }
    }
  } catch (error) {
    console.error(error);
  }
};
