import {create} from 'apisauce'
import tokenState from '../app/state/token'
import { Doctor, OtpRequest, VerifyOtpRequest } from '../types/interfaces'
 
// define the api
const api = create({
  baseURL: "https://clever-monkey-73.loca.lt/api/v1",
  headers:{
    "X-Client":"doctor",
    "Content-Type":"application/json"
  }
})
// axios.defaults.baseURL="192.168.0.100:8080/api/v1"

export const test101 = async (): Promise<any> => {

    const response = await api.get('/ping')
  
    if (response.ok) {
        return response.data
      }
  
}

//auth  api calls
export const GetOtp = async (req:OtpRequest): Promise<any> => {

  const response = await api.post('/auth/', req)//, { headers: {"X-Client":"patient", } })

  if (response.ok) {
      return response.data
    }

}

export const VerifyOtp = async (req:VerifyOtpRequest): Promise<any> => {

  const response = await api.post('/auth/verify', req)

  if (response.ok) {
      return response.data
  }

}


export const UpdateUserDoctor= async (user:Doctor):Promise<any>=>{
  const response=await api.put("/user/d",
                  user,
                  {headers:
                    {
                      "Authorization":"Bearer "+tokenState.token.get()
                    }
                  })
  if (response.ok) {
    return response.data
  }
              
}
