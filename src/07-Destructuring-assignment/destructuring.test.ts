test('', () => {
    let props = {
        name: 'Sasha',
        age: 34,
        lessons: [{title: '1'}, {title: '2'}]
    }
   /* const age = props.age
    const lessons = props.lessons*/ //Эти 2 строки эквивалентны
    const {age, lessons} = props // вот этим


    const a = props.age
    const l = props.lessons

    expect(age).toBe(34)
    expect(lessons.length).toBe(2)

    expect(a).toBe(34)
    expect(l.length).toBe(2)
})