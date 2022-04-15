export type ManType = {
    name: string
    age: number
}

const people: ManType[]= [
    {name: 'Sasha Ivanov', age: 34},
    {name: 'Ulya Petrova', age: 32},
    {name: 'Taras Sidorov', age: 21}
]

/*const transformator = (man: ManType) => { длинная запись
    return {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}*/

const transformator = (man: ManType) =>  // короткая запись. Экранируем фигруные скобки, что бы интерпретатор не воспринимал их как тело функции.
    ({
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })




const devs = [
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Sasha', lasName: 'Ivanov'
    }, {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Ulya', lasName: 'Ptrova'
    }, {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Taras', lasName: 'Sidorov'
    }

]

/*let d1 =transformator(people[0]) подробное описание работы .map
let d2 =transformator(people[1])
let d3 =transformator(people[2])*/

const dev2 =[
    transformator(people[0]),
    transformator(people[1]),
    transformator(people[2])
]
const dev3 =people.map(transformator)
const dev4 =people.map(man => ({
        stack: ['css,html', 'js', 'tdd', 'react'],// Вариант записи сразу в .map
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
}))


const messages =people.map(man => `Hello ${man.name.split(' ')}. Welcome to hell.`)

export const greetingsMessages = (people:ManType[]) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to hell.`)

}