
function increseAge(u: UserType) {
    u.age++;

}

type AddressType = {
    title: string
}
type UserType = {
    name: string
    age: number
    address: AddressType
}

test.skip(' reference type test', () => {
    let user: UserType = {
        name: 'Sasha',
        age: 34,
        address: {
            title: 'Minsk'
        }
    }

    increseAge(user)


    expect(user.age).toBe(35)

    const superMan = user
    superMan.age = 1000;

    expect(user.age).toBe(1000)

})
test.skip('array test', () => {
    let users = [
        {
            name: 'Sasha',
            age: 34
        },
        {
            name: 'Ulya',
            age: 32
        }

    ]

    let admins = users
    admins.push({name: 'Taras', age: 21})

    expect(users[2]).toEqual({name: 'Taras', age: 21})

})
test.skip('array reference test', () => {
    let usersCount = 100
    let adminsCount = usersCount
    adminsCount++

    expect(adminsCount).toBe(101)

})
test.skip('big reference type test', () => {
    const address = {title: 'Minsk'}

    let user: UserType = {
        name: 'Sasha',
        age: 34,
        address: address
    }

    let addr = user.address
    let user2: UserType = {
        name: 'Nataha',
        age: 28,
        address: address
    }
    address.title = 'Minsk City'


    expect(user.address.title).toBe('Minsk City')
    expect(user.address).toBe(user2.address)

})
test.skip('Array reference type test', () => {
    const address = {title: 'Minsk'}

    let user: UserType = {
        name: 'Sasha',
        age: 34,
        address: address
    }
    let user2: UserType = {
        name: 'Nataha',
        age: 28,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 33, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'


    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')

})