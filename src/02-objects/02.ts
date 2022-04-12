
type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechnologiesType = {
    id: number
    title: string
}
type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
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


}
/*
const school ={
    name: 'IT-INCUBATOR.BY',
    isOpen: true,
    mentors: []
}*/
console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)