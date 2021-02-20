export interface UserLoginReq {
  username: string;
  password: string;
}

export interface UserLoginResp {
  token?: string;
  data?: {
    userName: string;
    firstName: string;
    lastName: string;
  };
  error?: {
    message: string;
  };
}
