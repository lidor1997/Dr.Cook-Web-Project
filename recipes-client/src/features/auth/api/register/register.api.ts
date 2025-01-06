import { axios } from "../../../../services";
import { User } from "../../../user";

export interface RegisterRequest {
  name: string;
  username: string;
  password: string;
}

export interface RegisterRequestApi {
  name: string;
  username: string;
  password: string;
}

export type RegisterResponse = User;

export async function register(
  request: RegisterRequest
): Promise<RegisterResponse> {
  const response = await axios.post<RegisterResponse>(
    `/auth/register`,
    request
  );

  return response.data;
}
