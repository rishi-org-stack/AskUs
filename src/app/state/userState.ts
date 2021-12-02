import React from 'react';
import { createState } from '@hookstate/core';
import { Doctor } from '../../types/interfaces';
let initialDoctor:Doctor={
    age:0,
    exp_in_years:'0',
    name:'',
    specialities:[],
}

// let initialPatient:
const doctorState = createState<Doctor>(initialDoctor);
export default doctorState; 