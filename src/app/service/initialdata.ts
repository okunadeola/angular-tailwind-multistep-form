import { PlanModel } from "../models/planModel"



export const initialData = (): PlanModel =>{

    const storedData = window.localStorage.getItem('subplan')
    
    return storedData  ? JSON.parse(storedData) as PlanModel : {
        step: 0,
        personalInfo : {
            name: '',
            email: '',
            phone: ''
        },
        plan : {
            planName: '',
            planAmount: 0,
            planDuration: 'monthly'
        },
        addons: [],
        total: 0,
        isCompleted: false
    }
}

