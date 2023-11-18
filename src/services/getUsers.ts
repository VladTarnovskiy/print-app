import axios from "axios";

interface RegisterUser {
  email: string;
  password: string;
}

export interface ResponseUser {
  email: string;
  password: string;
  id: number;
}

interface Response {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}

interface GetUser {
  id: number;
  token: string;
}

const baseURL = "https://alpine-safe-pewter.glitch.me";

export const registerUser = async (data: RegisterUser): Promise<Response> => {
  try {
    const response = await axios({
      method: "post",
      url: `${baseURL}/register`,
      data: data,
    });
    return response.data;
  } catch (err) {
    throw new Error("User with current email already exist.");
  }
};

export const loginUser = async (data: RegisterUser): Promise<Response> => {
  try {
    const response = await axios({
      method: "post",
      url: `${baseURL}/login`,
      data: data,
    });
    return response.data;
  } catch (err) {
    throw new Error("User with this data doesn't exist.");
  }
};

export const getUser = async (data: GetUser): Promise<ResponseUser> => {
  try {
    const response = await axios({
      method: "get",
      url: `${baseURL}/users/${data.id}`,
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });

    return response.data;
  } catch (err) {
    throw new Error("User doesn't exist");
  }
};
