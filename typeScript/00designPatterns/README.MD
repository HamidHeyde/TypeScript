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
   a class that returns a new object and builds that through multiple steps (e.g. Hamburger.withBread().withMeat().withCheese().withSauce().build())
