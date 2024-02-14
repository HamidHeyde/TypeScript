console.log('\n', '---------Generic Classes---------', '\n');
/**
 * This is the Generic model of the same class
 */

type tDBG<T> = Record<string, T>
interface iDBG<T> {
  getDB: (id?: string) => T | tDBG<T>
  setDB: (id: string, value: T) => void;
}

class InMemoryDBG<T> implements iDBG<T> {
  protected db: tDBG<T> = {};

  getDB = (id?: string) => (id ? this.db[id] : this.db);
  setDB = (id: string, value: T) => {
    this.db[id] = value;
  };
}

// Using string as for db values
const myGDb = new InMemoryDBG();
console.log(myGDb.getDB());
myGDb.setDB('1', 'firstDB');
console.log(myGDb.getDB('1'));

// Using object as for db values
const myGDb2 = new InMemoryDBG();
console.log(myGDb2.getDB());
myGDb2.setDB('1', {a:2, b:3});
console.log(myGDb2.getDB('1'));

/**
 * Persistable
 */
interface iPDBG {
  saveToString: () => string;
  restoreFromString: (dbString: string) => void;
}

class PersistableDBG<T> extends InMemoryDBG<T> implements iPDBG {
  saveToString = () => {
    return JSON.stringify(this.db);
  };

  restoreFromString = (dbString: string) => {
    this.db = JSON.parse(dbString);
  };
}

const myPDBG = new PersistableDBG();
console.log(myPDBG.getDB());
myPDBG.setDB('1', {a:2, c:3});
myPDBG.setDB('2', {h:2, g: 99});
console.log(myPDBG.getDB('3'));
console.log(myPDBG.getDB('2'));
const dbString23:string = myPDBG.saveToString()
console.log(dbString23);
console.log(myPDBG.getDB())

const myPDBG2 = new PersistableDBG();
myPDBG2.restoreFromString(dbString23)
console.log(myPDBG2.getDB())