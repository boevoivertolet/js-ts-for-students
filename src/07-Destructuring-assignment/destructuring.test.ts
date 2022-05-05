import {ManType} from './Destructuring';


let props: ManType
beforeEach(() => {
    props = {
        name: 'Sasha',
        age: 34,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Nezavisimosti'
            }
        }
    }
})


test('', () => {

    /* const age = props.age
     const lessons = props.lessons*/ //Эти 2 строки эквивалентны
    const {age, lessons} = props // вот этим
    const {title} = props.address.street

/*    const a = props.age
    const l = props.lessons*/

    expect(age).toBe(34)
    expect(lessons.length).toBe(2)


    expect(title).toBe('Nezavisimosti')

})
test('', ()=> {

})