import Axios, { AxiosRequestConfig } from 'axios'
import { API_BASE_URL } from './config'

export interface Credentials {
  email?: string
  password?: string
}
export type dataUser = Credentials & {
  firstName?: string
  lastName?: string
}

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: API_BASE_URL + 'auth/login',
    data,
  }

  try {
    const { data: response } = await Axios.request(requestConfig)
    return response
  } catch (e: any) {
    console.error(e)
    return { error: e.response.data.message }
  }
}

type userTokenResponse = {
  token: string | null
  data: {}
}
export const onGreetings =  async (userLogin: userTokenResponse) => {
  let headers = {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": 'Bearer ' + userLogin.token
  };
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: API_BASE_URL + 'auth',
    headers: headers
  }

  try {
    const { data: response}  = await Axios.request(requestConfig); 
    return { response }
  } catch (e:any) {
    return { error: e.response }
  }
}

export const onRegister = async (data: dataUser) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: API_BASE_URL + 'auth/register',
    data,
  }

  try {
    const { data: response } = await Axios.request(requestConfig)
    return response
  } catch (e: any) {
    console.error(e)
    return { error: e.response.data.message }
  }
}
