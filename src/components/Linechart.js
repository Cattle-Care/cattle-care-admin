import React from 'react'
import {Line} from 'react-chartjs-2'
function Linechart() {

    const data ={
        labels:[ 'Jan','Feb','March','April','May',],

        datasets:[
            {
                label:'Sales for 2020 (M)',
                data:[3,2,1,5]
            },
            
        ]
           
       
    }
    return (
        <>
        <div className="flex justify-center ">
            <div className="w-full">
            <Line data={data}/>
            </div>
            </div>
        </>
    )
}

export default Linechart
