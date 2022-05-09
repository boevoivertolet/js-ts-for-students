

type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType = {
    '101': {id: 101, name: 'Sasha'},
    '76543': {id: 76543, name: 'Ulya'},
    '1876543': {id: 1876543, name: 'Taras'},
    '12456': {id: 12456, name: 'Galina'}
}


beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Sasha'},
        '76543': {id: 76543, name: 'Ulya'},
        '1876543': {id: 1876543, name: 'Taras'},
        '12456': {id: 12456, name: 'Galina'}
    }


})


test('should update corresponding user from obj', () => {
    users['101'].name = 'Aleksander'

    expect(users['101'].name).toBe('Aleksander')


})
test('should delete corresponding user from obj', () => {
    delete users['101']

    expect(users['101']).toBeUndefined();


})