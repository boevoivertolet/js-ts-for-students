import {UserType} from './10-01';


function hairdresser(u: UserType, power: number){
    u.hair = u.hair / power
}

test( 'reference type test',()=> {
    let user: UserType={
        name: 'Sasha',
        hair: 32,
        address:{
            title: 'Spb'
        }
    }
    hairdresser(user, 2)

    expect(user.hair).toBe(16)



})

