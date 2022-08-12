import {makeHairStyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from './10-01';




test.skip('reference type test', () => {
    let user: UserType = {
        name: 'Sasha',
        hair: 32,
        address: {
            title: 'Spb'
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
            title: 'Spb'
        },
        laptop:{
            title: 'ZenBook'
        }
    }


    const travelUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(travelUser)
    expect(user.address).not.toBe(travelUser.address)
    expect(user.laptop).toBe(travelUser.laptop)
    expect(travelUser.address.title).toBe('Moscow')

})


test('upgrade laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Sasha',
        hair: 32,
        address: {
            title: 'Spb'
        },
        laptop:{
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

