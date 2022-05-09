import {usersObj} from './08';


beforeEach(()=> {

})


test('should select corresponding user from obj', ()=> {

    expect(usersObj[0]).toBe('Sasha')
    expect(usersObj[1]).toBe('Ulya')
    expect(usersObj[2]).toBe('Taras')
    expect(usersObj[3]).toBe('Galina')
})