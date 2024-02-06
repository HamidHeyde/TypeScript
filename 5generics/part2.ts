// Usage of Key Of

/**
 * Example 1
 * a function that takes a chosen key from an object
 * input is an array of objects. all objects has that key
 */
export const keyPlucker = <T>(arr: T[], key: keyof T): T[(keyof T)][] => {
  return arr.map( item => item[key]).filter(item => !!item)
}

const arr = [{a:2, b:4}, {c:1, b:5}, {a:1, b:4, c:5}]
console.log(keyPlucker(arr, 'a'))
console.log(keyPlucker(arr, 'b'))
console.log(keyPlucker(arr, 'c'))

/**
 * Example 2
 * a function that sends an event. The event can be either AddToCart or CheckOut.
 * AddToCart is an object with user, time, quantity and productId
 * Checkout is an object with user and time
 */

interface EventBase {
  user: string
  time: number
}
interface Event {
  'addToCart': EventBase & {quantity: number, productId: number}
  'checkout': EventBase
}
export const sendEvent = (eventName: keyof Event, data: Event[keyof Event]): void=> {
  console.log([eventName, data])
}
sendEvent('addToCart', {
  user: "Hamid",
  time: 21342120,
  quantity: 10,
  productId: 12344
})