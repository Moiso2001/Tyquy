// import React from 'react'

/* Plan Components */
import Office from './Office';
import Hotel from './Hotel';
import Spa from './Spa';

type PlanProps = {
    planName: string
    handlePlan: Function
}

export default function Plan({planName, handlePlan}: PlanProps) {
    switch (planName) {
        case 'office':
            return(
                <Office handlePlanSelect={handlePlan}/>
            )

        case 'spa':
            return(
                <Spa/>
            )

        case 'hotel':
            return(
                <Hotel/>
            )
        default:
            break;
    }
}
