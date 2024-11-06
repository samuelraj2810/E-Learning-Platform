import axios from "axios";

export const POST = async (action, params) => {
  try {
    const result = await axios.post(action, params);
    if (result?.status === 200) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};

export const GET = async (action, token=null) => {
  try {
    const result = await axios.get(`http://localhost:3000/${action}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (result?.status === 200) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};
