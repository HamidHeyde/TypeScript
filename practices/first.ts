// Problem
interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID {
  name: string;
}

let houses: House[] = [
  {
    name: 'Atreides',
    planets: 'Calladan'
  },
  {
    name: 'Corrino',
    planets: ['Kaitan', 'Salusa Secundus']
  },
  {
    name: 'Harkonnen',
    planets: ['Giedi Prime', 'Arrakis']
  }
];

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(
  houses: unknown,
  filter?: (house: House) => boolean
): HouseWithID[] {
  let housesArray: House[] =
    typeof houses === 'string' ? JSON.parse(houses) : houses;

  return filter
    ? housesArray.filter(filter).map((item) => ({ name: item.name }))
    : housesArray.map((item) => ({ name: item.name }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides'),
  '\n',
  findHouses(houses, ({ name }) => name === 'Harkonnen'),
  '\n',
  findHouses(JSON.stringify(houses)),
  '\n',
  findHouses(houses)
);
