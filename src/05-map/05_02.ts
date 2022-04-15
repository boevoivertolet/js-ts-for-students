import {CityType, GovernmentBuildingType, HouseType} from '../02-objects/02_02';

export const getStreetTitlesOfGovernmentsBuildings = (buildings: GovernmentBuildingType[]) => {
    return buildings.map(b => b.address.street.title)
}
export const getStreetTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(h => h.address.street.title)
}
export const getGreetingsPeoples = (houses: HouseType[]) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}

