

type UsersType ={
    [key:string]:{id:number, name:string}
}





export const usersObj = {
    '0': 'Sasha',
    '1': 'Ulya',
    '2': 'Taras',
    '3': 'Galina'
}
export const users : UsersType = {
    '101': {id: 101, name: 'Sasha'},
    '76543': {id: 76543, name: 'Ulya'},
    '1876543': {id: 1876543, name: 'Taras'},
    '12456': {id: 12456, name: 'Galina'}
}

//users[1]
let user ={id: 100500, name: 'Igor'}
 users[user.id]=user
console.log(users)




export const usersArray = [
    {id: 101, name: 'Sasha'},
    {id: 76543, name: 'Ulya'},
    {id: 1876543, name: 'Taras'},
    {id: 12456, name: 'Galina'}
]
