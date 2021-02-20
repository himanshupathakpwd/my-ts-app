import { AxiosResponse } from 'axios'
import { UserLoginReq, UserLoginResp } from '../../types'

import { axiosInstance } from '../base'

export const userLoginService = async (user: UserLoginReq) => {
  try {
    const responseData: AxiosResponse = await axiosInstance.get('/user/login', {
      data: user
    })
    const { data }: AxiosResponse<UserLoginResp> = responseData
    return data
  } catch (e) {
    throw new Error(`userLoginService :::: ${JSON.stringify(e)}`)
  }
}
