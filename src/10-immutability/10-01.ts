export type UserType = {
    name: string
    hair: number
    address: { title: string, house: number }
}
export type LaptopType = {
    title: string
}
export type  UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type  UserWithBooksType = UserType & {
    books: Array<string>
}
export type CompaniesType = {
    companies: Array<{ id: number, title: string }>

}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, title: city}}

}

export const upgradeUserLaptop = (u: UserWithLaptopType, UpLap: string) => {
    return {...u, laptop: {...u.laptop, title: UpLap}}
}

//_______________________________________________________________________________

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, address: {...u.address, house: house}}

}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
    return {...u, books: [...u.books.concat(books)]}
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {...u, books: u.books.map(el => el === oldBook ? newBook : el)}
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return {...u, books: u.books.filter(b => b !== book)}

}

export function updateCompany(u: UserWithLaptopType & CompaniesType, id: number, title: string) {
    return {...u, companies: u.companies.map(el => (el.id === id ? {...el, title: title} : el))}

}

