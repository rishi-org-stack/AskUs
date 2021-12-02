interface Doctor{
    // token:string;
    name:string;
    age:number;
    exp_in_years:string;    
    specialities:string[];

}


interface Patient{
    token:string;
    name:string;
    age:number;
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
    Doctor
}