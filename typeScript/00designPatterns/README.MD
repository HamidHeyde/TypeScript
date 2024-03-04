#### Design Patterns
 - [Singleton]()
 The idea here is to have create an object that could not be initiated, replaced, etc. and remains the same throughout the whole project and only the propertied are updated (e.g. cache object).
<br/>
 - [Factory]()
 The idea here is to have one interface or one class that will generate a new object by just passing a different argument value
   - [Simple Factory]()
   a class or an interface that creates new object with possible different behavior by passing a different value for the same argument in the constructor (e.g. employee class that returns different employee object by passing the employee type).
   - [Absolute Factory]()
   a class or an interface that creates and return a new type of class objects by passing a different value for the same argument in the constructor (e.g. a class the returns an Android or and IOS button object by receiving type=ios/android as value in the constructor)
   - [Builder Factory]()
   a class that returns a new object and builds that through multiple steps (e.g. Hamburger.withBread().withMeat().withCheese().withSauce().build())
