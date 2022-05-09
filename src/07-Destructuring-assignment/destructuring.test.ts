import {ManType} from './Destructuring';


let props: ManType
beforeEach(() => {
    props = {
        name: 'Sasha',
        age: 34,
        lessons: [{title: '1'}, {title: '2'},{title: '3'}],
        address: {
            street: {
                title: 'Nezavisimosti'
            }
        }
    }
})


test('1', () => {

    /* const age = props.age
     const lessons = props.lessons*/ //Эти 2 строки эквивалентны
    const {age, lessons} = props // вот этим
    const {title} = props.address.street

    /*    const a = props.age
        const l = props.lessons*/

    expect(age).toBe(34)
    expect(lessons.length).toBe(3)


    expect(title).toBe('Nezavisimosti')

})


test('2', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    /*const [ls1, ls2] = props.lessons;*/
    const[ls1, ...restLessons]=props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')

    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')



})