#### Design Patterns
 - [Singleton](./singleton)
 The idea here is to create an object that could not be initiated, replaced, etc. and remains the same throughout the whole project and only the properties are updated (e.g. cache object).<br/>
 - [Factory](./factory)
 The idea here is to have one interface or one class that will generate a new object by just passing a different argument value<br/>
   - `Simple Factory`:
   a class or an interface that creates a new object with possible different behaviour by passing a different value for the same argument in the constructor (e.g. an employee class that returns a different employee object by passing the employee type).<br/>
   - `Absolute Factory`:
   a class or an interface that creates and return a new type of class object by passing a different value for the same argument in the constructor (e.g. a class that returns an Android or an IOS button object by receiving type="ios" or "android" as value in the constructor)<br/>
   - `Builder Factory`
   a class that returns a new object and builds that through multiple steps (e.g. Hamburger.withBread().withMeat().withCheese().withSauce().build())<br/>
 - [Observer](./3observer/)
   - `Observer`
    The idea here is to create a class called Observable. The class contains an array of Observers (The observers are functions, taking in data. data is the value based on which the observes are called when it updates. The observers are added to the array using a function called Subscribe. and they are removed from the array using a function called UnSubscribe).<br/>
    When the data is updated in the observable, the same class (observable) will iterate through the array of the observers and calls all those functions passing in the data that was updated.<br/>
   - `Handler`
    Its the same as the Observer. The only difference is that it is conditional. the data should be passed to the subscribed observer that matches the condition. and when thats done, it will skip the rest. and wont call the other available observers in the array.<br/>
 - [Proxy](./4proxy)
 The idea here is to wrap an object with a Proxy and defining setters and getters in away that when accessing that object (to read value or set/update a value) some kind of processing happens before the value is accessed (e.g.) validation before setting a value for a prop in an object<br/>
- [Flyweight](./5flyweight)<br/>
 The idea here is to make sth happen if some condition is satisfied. (e.g. Lets say we have an object containing the data urls for some specific props `{pros: url}` if the prop is matched with what is required, then the data will be fetched. or else we wont do so. This way we wont occupy memory more than its required)