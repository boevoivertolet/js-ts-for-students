export type UserType = {
    name: string
    hair: number
    address: { title: string }
}
export type LaptopType = {
    title: string
}
export type  UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return  {...u, address:{...u.address, title: city}}

}
export const upgradeUserLaptop = (u: UserWithLaptopType, UpLap: string) => {
  return {...u, laptop:{...u.laptop, title: UpLap}}
}

