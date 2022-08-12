import {greetingsMessages, ManType} from './05';

let people: ManType[] = [
    {name: 'Sasha Ivanov', age: 34},
    {name: 'Ulya Petrova', age: 32},
    {name: 'Taras Sidorov', age: 21}
]
beforeEach(() => {
    people = [
        {name: 'Sasha Ivanov', age: 34},
        {name: 'Ulya Petrova', age: 32},
        {name: 'Taras Sidorov', age: 21}
    ]
})
test.skip('should get array of greeting messages', () => {

    const messages = greetingsMessages(people)
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Sasha. Welcome to hell.')
    expect(messages[1]).toBe('Hello Ulya. Welcome to hell.')
    expect(messages[2]).toBe('Hello Taras. Welcome to hell.')
})