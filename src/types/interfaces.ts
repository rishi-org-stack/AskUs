interface Doctor{
    // token:string;
    name:string;
    age:number;
    exp_in_years:string;    
    specialities:string[];

}


interface Patient{
    name:string;
    age:number;
    height:number;
    weight:number;
    sex:string;
    concerned_secialities:string[];

}


interface OtpRequest {
    email:string
}

interface VerifyOtpRequest {
    id:number;
    otp:string;
}
export type {
    OtpRequest,
    VerifyOtpRequest,
    Doctor,Patient
}