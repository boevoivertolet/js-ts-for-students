import {CityType} from '../02-objects/02_02';
import {getGreetingsPeoples, getStreetTitlesOfGovernmentsBuildings, getStreetTitlesOfHouses} from './05_02';


let city: CityType;


beforeEach(() => {

    city = {

        title: 'New York',

        houses: [
            {
                id: 1, buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2, buildedAt: 208,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3, buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
        ],

        governmentBuildings: [

            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {street: {title: 'Central Str'}}
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {street: {title: 'South Str'}}
            }
        ],

        citizensNumber: 1000000

    }

})

// 01. создайте в том же файле еще одну функцию, что бы тесты прошли

test.skip('List of streets titles of governments building', () => {
    let streetsNames = getStreetTitlesOfGovernmentsBuildings(city.governmentBuildings);
    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central Str');
    expect(streetsNames[1]).toBe('South Str');
})


// 01. создайте в том же файле еще одну функцию, что бы тесты прошли

test.skip('List of streets titles ', () => {
    let streets = getStreetTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe('White street');
    expect(streets[1]).toBe('Happy street');
    expect(streets[2]).toBe('Happy street');
})

test.skip('Create greeting messages for streets', () => {
    let greetingsPeople = getGreetingsPeoples(city.houses);

    expect(greetingsPeople.length).toBe(3);
    expect(greetingsPeople[0]).toBe('Hello guys from White street');
    expect(greetingsPeople[1]).toBe('Hello guys from Happy street');
    expect(greetingsPeople[2]).toBe('Hello guys from Happy street');
})

