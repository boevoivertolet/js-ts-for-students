import React, {useState} from 'react';

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car:{model:string}

}

function useSashaState(m:string){
    return[m, function(){}]
}
function useSashaState2(m:string){
    return{message: m, setMessage: function(){}}
}


export const ManComponent: React.FC<PropsType> = ({title,man, ...props}) => {// Достань из проспсов тайтл и мэн. А всё остальное запихни в объект пропс

    /* const {title} = props
     const {name} = props.man*/
    /*const {title, man: {name}} = props*/


   const[message, setMessage] = useSashaState('hello')
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <hr/>
            <div>{props.car.model}</div>
        </div>
    )
}