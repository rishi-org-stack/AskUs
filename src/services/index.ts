import {create} from 'apisauce'
import tokenState from '../app/state/token'
import { Doctor, OtpRequest, VerifyOtpRequest } from '../types/interfaces'
 
// define the api
const api = create({
  baseURL: "https://massive-moth-82.loca.lt/api/v1",
  headers:{
    "X-Client":"doctor",
    "Content-Type":"application/json",
    "Authorization":"Bearer "+tokenState.token.get()
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

export const GetUser= async ():Promise<any>=>{
  const response=await api.get("/user/",)
                  // user,
                  // headers:
                  //   {
                  //     "Authorization":"Bearer "+tokenState.token.get()
                  //   }
                  // }
                  // {
                  // )
  // if (response.ok) {
    return response.data
  // }
              
}

// export const GetFollowedByPatients= async():Promise<any>=>{
//   const response =await api.get("/user/fbp",{
//     headers:
//     {
//       "Authorization":"Bearer "+tokenState.token.get()
//     }
//   })

//   // if (response.ok) {
//     return response.dat
//   
// }
export const GetFollowedByPatients= async (tk:string):Promise<any>=>{
  const response=await api.get("/user/fbp",{},{headers:{
    "Authorization":"Bearer "+tk
  }})
  // if (response.ok) {
    return response.data
  // }
              
}
export const GetFollowedByDoctors= async():Promise<any>=>{
  const response =await api.get("/user/fbd",{
    headers:
    {
      "Authorization":"Bearer "+ tokenState.token.get()
    }
  })

  if (response.ok) {
    return response.data
  }
       
}

export const GetFollowingDoctors= async(tk: string):Promise<any>=>{
  const response =await api.get("/user/fd",{},{headers:{
    "Authorization":"Bearer "+tk
  }})

  // if (response.ok) {
    return response.data
  // }
       
}

export const SentToMe= async(tk: string):Promise<any>=>{
  const response =await api.get("/req/forme",{},{
    headers:
    {
      "Authorization":"Bearer "+tk
    }
  })

  if (response.ok) {
    return response.data
  }
       
}