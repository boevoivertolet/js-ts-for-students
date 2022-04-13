/*

export const sum = (a: number, b:number) => {
    return a + b;
}

*/

import {StudentType} from '../02-objects/02';
import {CityType, GovernmentBuildingType, HouseType} from '../02-objects/02_02';

/*const student: StudentType = {
    name: 'Sasha',
    age: 34,
    isActive: false,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: ' HTML'
        },
        {
            id: 2,
            title: 'JS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]


}*/
export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })

}
export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;


}
export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}
export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;

}
export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}
export const toFireStaff = (governmentBuilding: GovernmentBuildingType, stuffCountToFire: number) => {
    governmentBuilding.staffCount -= stuffCountToFire;
}
export const toHireStaff = (gB: GovernmentBuildingType, stuffCountToHire: number) => {
    gB.staffCount += stuffCountToHire;

}