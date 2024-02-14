//Replace Record<> in objects
/**
 * type tProduct = {
 * name: string,
 * color: string
 * } & Record <string, string>
 * 
 * last line could be replaced and re-written as follow
 */

type tProduct = {
  name: string,
  [key: string]: string
}

interface iProduct {
  name: string,
  [key: string]: string
}


const myProduct: tProduct = {
  name: "plasticGun",
  bodyColor: 'black',
  triggerColor: 'green',
  company: 'toysRUs'
  // Any number of keys could be added here
}

/**
 * Transforming one type to another
 */
type typeToBoolean<Type> = {
  [property in keyof Type]: boolean
}

/**
 * you can pass in interface or type
 * However the output should be a type
 */
type tProductBoolean = typeToBoolean<tProduct>
type iProductBoolean = typeToBoolean<iProduct>

/**
 * Example: A template for a function taking 2 args as an input
 * 1. object (product) 2. listeners
 */

// transformer
type typeToCarListeners<Type> = {
  [property in keyof Type as `on${Capitalize<string & property>}Change`]: () => void
}

type tCar = {
  name: string
  color: string
  model: string
}

const car: tCar = {
  name: 'BMW',
  color: 'Red',
  model: '2019'
}

type tCarlisteners = typeToCarListeners<tCar>

export const productListeners = <T>(car:T, listeners: tCarlisteners): void => {
  console.log([car, listeners])
}

productListeners(car, {
  onNameChange: () => {console.log('Name Changed')},
  onColorChange: () => {console.log('Name Changed')},
  onModelChange: () => {console.log('Name Changed')}
})
