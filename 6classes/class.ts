// Defining a class and a property within a constructor
class myClass{
  // private myVariable:number = 10
  // The one below is equal than the one above
  constructor(private myVariable: number){}
}

/**
 * In Memory Db is a strig-based db
 * It stores everything in an object where each key would be the id of that db
 * and the value would be the db itself (as JSON string)
 */

type tDB = Record<string, string>
interface iDB {
  getDB: (id?: string) => string | tDB
  setDB: (id: string, value: string) => void;
}

class InMemoryDB implements iDB {
  protected db: tDB = {};

  getDB = (id?: string) => (id ? this.db[id] : this.db);
  setDB = (id: string, value: string) => {
    this.db[id] = value;
  };
}

const myDb = new InMemoryDB();
console.log(myDb.getDB());
myDb.setDB('1', 'firstDB');
console.log(myDb.getDB('3'));
console.log(myDb.getDB('1'));

interface iPDB {
  saveToString: () => string;
  restoreFromString: (dbString: string) => void;
}

class PersistableDB extends InMemoryDB implements iPDB {
  saveToString = () => {
    return JSON.stringify(this.db);
  };

  restoreFromString = (dbString: string) => {
    this.db = JSON.parse(dbString);
  };
}

const myPDB = new PersistableDB();
console.log(myPDB.getDB());
myPDB.setDB('1', 'firstDB');
myPDB.setDB('2', 'SecondDB');
console.log(myPDB.getDB('3'));
console.log(myPDB.getDB('2'));
const dbString:string = myPDB.saveToString()
console.log(dbString);
console.log(myPDB.getDB())

const myPDB2 = new PersistableDB();
myPDB2.restoreFromString(dbString)
console.log(myPDB2.getDB())