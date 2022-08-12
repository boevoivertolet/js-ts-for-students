import {
    addNewBooksToUser, CompaniesType,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompany2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from './10-01';


test.skip('reference type test', () => {
    let user: UserType = {
        name: 'Sasha',
        hair: 32,
        address: {
            title: 'Spb',
            house: 9
        }
    }


    const cutUser = makeHairStyle(user, 2)

    expect(cutUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(cutUser.address).toBe(user.address)

})


test.skip('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Sasha',
        hair: 32,
        address: {
            title: 'Spb',
            house: 9
        },
        laptop: {
            title: 'ZenBook'
        }
    }


    const travelUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(travelUser)
    expect(user.address).not.toBe(travelUser.address)
    expect(user.laptop).toBe(travelUser.laptop)
    expect(travelUser.address.title).toBe('Moscow')

})


test.skip('upgrade laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Sasha',
        hair: 32,
        address: {
            title: 'Spb',
            house: 9
        },
        laptop: {
            title: 'ZenBook'
        }
    }


    const upgradeLaptop = upgradeUserLaptop(user, 'Mac')

    expect(user).not.toBe(upgradeLaptop)
    expect(user.address).toBe(upgradeLaptop.address)
    expect(user.laptop).not.toBe(upgradeLaptop.laptop)
    expect(upgradeLaptop.laptop.title).toBe('Mac')
    expect(user.laptop.title).toBe('ZenBook')

})

test('upgrade books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Sasha',
        hair: 32,
        address: {
            title: 'Spb',
            house: 9
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }


    const userCopy = moveUserToOtherHouse(user, 55)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(55)

})
test.skip('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Sasha',
        hair: 32,
        address: {
            title: 'Spb',
            house: 9
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }


    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
    expect(user.books.length).toBe(4)
    expect(userCopy.books.length).toBe(6)

})

test.skip('update books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Sasha',
        hair: 32,
        address: {
            title: 'Spb',
            house: 9
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }


    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)
    expect(userCopy.books.length).toBe(4)
    expect(userCopy.books).toEqual(['css', 'html', 'ts', 'react'])

})
test.skip('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Sasha',
        hair: 32,
        address: {
            title: 'Spb',
            house: 9
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }


    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).not.toBe('js')
    expect(user.books.length).toBe(4)
    expect(userCopy.books.length).toBe(3)
    expect(userCopy.books).toEqual(['css', 'html', 'react'])

})
test.skip('update company', () => {
    let user: UserWithLaptopType & CompaniesType = {
        name: 'Sasha',
        hair: 32,
        address: {
            title: 'Spb',
            house: 9
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'tds'}, {id: 2, title: 'x-zone'}]
    }


    const userCopy = updateCompany(user, 1, 'Server')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies[0].title).not.toBe('tds')
    expect(userCopy.companies[0].title).toBe('Server')
    expect(userCopy.companies).toEqual([{id: 1, title: 'Server'}, {id: 2, title: 'x-zone'}])

})
test('update company Super Object', () => {

    let companies = {
        'Sasha': [{id: 1, title: 'tds'}, {id: 2, title: 'x-zone'}],
        'Ulya': [{id: 2, title: 'x-zone'}]
    }

    let copy = updateCompany2(companies, 'Sasha', 1, 'Server')


    expect(copy['Sasha']).not.toBe(companies['Sasha'])
    expect(copy['Ulya']).toBe(companies['Ulya'])
    expect(copy['Sasha'][0].title).toBe('Server')
})