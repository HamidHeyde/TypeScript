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
 The idea here is to make sth happen if some condition is satisfied. (e.g. Lets say we have an object containing the data urls for some specific props `{pros: url}` if the prop is matched with what is required, then the data will be fetched. or else we wont do so. This way we wont occupy memory more than its required)<br/>
- [Command](./6command/)
  - The idea here is to have some sort of objects keeping a state. To update the state you need to receive a command object providing both the `Command` and the `Undo` command. You should also keep a stack of commands.
  - The state will be updated by running the command from the object (e.g. AddOneCommand), and then the command object should be pushed into the command stack. 
  - When Undo is  called, the last command will be popped from the command stack. Using the undo command, the state will be restored to the last state.<br/>
- [Memento](./7memento/)
  - The idea here is the same as the `Command` pattern where you would be able to Undo and go back to the last state
  - The difference here is that, instead of keeping a stack of commands, the `Memento` pattern keeps a stack of `states`. every time you updated the state, you, push the new state, to the stack. and every time you undo a state, you pop the last state from the stack and restore to that state.
  - So, there is no need for the command object  to contain the `undo` command <br/>
- [Visitor](./8visitor/)
  - As a `Class`: The idea is to have a base class, which has a method called `accept(visitor)`.
    - Through the 1st scenario: the accept method will call on visitor passing in `this` as argument. So, the visitor will be able to access the data of the object and apply any modification if required
    - Through the 2nd scenario: the accept method can do sth (e.g. fetching data) and when required call the visitor passing in the processed `data`. The visitor can then uses that data and does what it wishes with it.<br/>
  - As a `function`: the idea here is to hav a base function having any number of desired args and a callback `function(...args, callback)`
   - For any required scenario, the base function can perform any required operation and then call the callback passing in the processed data. The callback can then uses that data and does what it wishes with it.
- [Iterator](./9iterator/)
The idea here is to have a base function or a class. The base should have `next()` and `hasNext()` methods. every time the `next()` is called, it should return the next value in the array. and when `hasNext()` is called, it should return the next set of data (e.g. fetching next 10 records from the database).
  - `implementation`: in javascript we can use g`enerator function` and `yield` structure to achieve this.