// Class property modification using visitor function
export class visitableClassBasic {
  constructor(private name: string = '') {}

  getName() {
    return this.name || 'Anonymous';
  }

  accept(visitor: any) {
    visitor.visit(this);
  }
}

const visitorShyleen = () => {
  return {
    visit(classRef: any) {
      classRef.name = `Shyleen`;
    },
  }
};

const visitorHamid = () => {
  return {
    visit(classRef: any) {
      classRef.name = `Hamid`;
    },
  }
};

// ------------------------------------------
const myVisitableClass = new visitableClassBasic();
console.log(myVisitableClass.getName());
myVisitableClass.accept(visitorShyleen());
console.log(myVisitableClass.getName());
myVisitableClass.accept(visitorHamid());
console.log(myVisitableClass.getName());