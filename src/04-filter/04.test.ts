test.skip('should take old men older then 90', () => {
    const ages = [18, 92, 56, 45, 78, 23, 96, 54]; // исходный массив
    const predicate = (age: number) => age > 90;// функция, в которой описываются условия фильтрации.
    // если  в стрелочной функции после стрелки нет фигурных скобок, это значит, что всё, что после стрелки возвращается как результат функции.


    const oldAges = ages.filter(predicate) // создаем новывй массив, в который попадут значения после фильтрации.

    expect(oldAges.length).toBe(2)//ожидаем, что новый массив со значениями после фильтрации длинной в 2 элемента
    expect(oldAges[0]).toBe(92)//ожидаем, что этот элемент равен 92
    expect(oldAges[1]).toBe(96)//ожидаем, что этот элемент равен 96

})
test.skip('should take cheap courses', () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'JS', price: 200},
        {title: 'react', price: 110},
    ] // исходный массив
    /*  const chipPredicate = (course: CourseType) => course.price < 160;*/

    // функция, в которой описываются условия фильтрации


    const cheapCourses = courses.filter(course => course.price < 160) // создаем новывй массив, в который попадут значения после фильтрации.
    expect(cheapCourses.length).toBe(2)// ожидаем, что длинна массива будет составлять 2 элемента
    expect(cheapCourses[0].title).toBe('css')//ожидаем, что в новом массиве в объексте title  с индексом 0 будет значение 'css'
    expect(cheapCourses[1].title).toBe('react')//ожидаем, что в новом массиве в объексте title  с индексом 1 будет значение 'react'

})
test.skip('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]
    /*const predicateTasks = (tasks: any) => tasks.isDone
    const completedTasks = tasks.filter(predicateTasks)*/
    const completedTasks = tasks.filter(task => task.isDone)   // короткий синтаксис. Я хочу взять тот таск, который таск из дан.

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)


})
test.skip('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]
    /*const predicateTasks = (tasks: any) => tasks.isDone
    const completedTasks = tasks.filter(predicateTasks)*/
    const unCompletedTasks = tasks.filter(task => !task.isDone)   // короткий синтаксис. Я хочу взять тот таск, который таск из дан. !task.isDone НЕ ИЗ ДАН

    /*let a = tasks[0].isDone; // а обращается к элементу массива с индексом 0 с ключем из дан и возвращает фолс.
    let b = !tasks[0].isDone;// б обращется к элементу массива с индексом 0 с ключем из дан и возвращает НЕ фолс т.е. тру.*/

    expect(unCompletedTasks.length).toBe(2)
    expect(unCompletedTasks[0].id).toBe(1)
    expect(unCompletedTasks[1].id).toBe(3)


})



