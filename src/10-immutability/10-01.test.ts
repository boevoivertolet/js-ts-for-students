import {UserType} from './10-01';


function makeHairStyle(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}
    return copy
}

test('reference type test', () => {
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


})

