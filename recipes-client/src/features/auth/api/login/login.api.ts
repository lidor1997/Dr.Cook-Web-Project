import { axios } from "../../../../services/axios";
import { User } from "../../../user";

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = User;

export async function login(request: LoginRequest): Promise<LoginResponse> {
  const response = await axios.post<LoginResponse>(`/auth/login`, request);

  return response.data;
}
