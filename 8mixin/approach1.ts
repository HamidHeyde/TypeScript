// Logger fucntion
const logger = (message: string): void => {
  console.log(`From function => ${message}`);
};

logger('1st message');
logger('2nd message');

// A function that returns a class
const classCreatorFunction = () => {
  //  Could conatain a name or not
  // return class OR return class LoggerClass
  return class {
    constructor(private completeLog: string | null = null) {}

    log = (message: string) => {
      console.log(`from class => ${message}`);
      this.completeLog = this.completeLog
        ? `${this.completeLog}\n${message}`
        : message;
    };

    getHistory = () => console.log(this.completeLog);
  };
};

const loggerClass = classCreatorFunction();
const myLogger = new loggerClass();
myLogger.log('Hello');
myLogger.log('My name is Hamid');
myLogger.getHistory();

// Sample generic class being returned fromm a function
const createInMemoryDatabaseClass = <T>() => {
  return class<T> {
    constructor(private db: Record<number, T> = {}) {}

    getDBItem = (id: number): T | null => this.db[id];
    setDBItem = (id: number, value: T): void => {
      this.db[id] = value;
    };

    getDB = (): Record<number, T> => this.db;
  };
};

const dbClass = createInMemoryDatabaseClass<string>();
const myDB = new dbClass();
console.log(myDB.getDBItem(2));
myDB.setDBItem(1, '1st item');
myDB.setDBItem(2, '2nd item');
console.log(myDB.getDBItem(2));
console.log(myDB.getDB());

const dbClass2 = createInMemoryDatabaseClass<object>();
const myDB2 = new dbClass();
console.log(myDB2.getDBItem(2));
myDB2.setDBItem(1, { a: 1, b: 2 });
myDB2.setDBItem(2, { c: 3, t: 4 });
console.log(myDB2.getDBItem(2));
console.log(myDB2.getDB());

// Mixing to classes [Composition]
type Constructor<T> = new (...args: any[]) => T;

const Loggable = <T extends Constructor<{
    getDB: ()=> Record<number, T>
  }>
>(Base: T) => {
  return class extends Base {
    logDB = () => {
      console.log(this.getDB())
    }
  }
}

const loggableClass = Loggable(createInMemoryDatabaseClass<string>())
const myLoggable = new loggableClass()
myLoggable.logDB()
myLoggable.setDBItem(2, {a:2, d:3})
myLoggable.logDB()