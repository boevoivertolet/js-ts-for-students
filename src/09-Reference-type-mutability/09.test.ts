


function increseAge(u:UserType) {
    u.age++;

}
type UserType ={
    name: string
    age: number
}

test('big test', ()=> {
    let user: UserType ={
        name: 'Sasha',
        age: 34
    }

    increseAge(user)


    expect(user.age).toBe(35)
})