import api from "../api/api"

export interface RegisterRequest {
  username: string
  email: string
  password: string
}

export const registerUser = (data: RegisterRequest) => {
  return api.post("/register", data)
}
