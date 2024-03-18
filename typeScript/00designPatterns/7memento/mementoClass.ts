type tMementoCommand<T> = {
  execute: (state: T) => T;
}

export class mementoControllerClass<T> {
  private state: T
  private stateStack: T[] = []
  
  constructor(initialState: T){
    this.state = initialState
  }
  get(){
    return this.state
  }

  execute(command: tMementoCommand<T>){
    // push state into the stack
    this.stateStack.push(this.state)
    // run command => update the state
    this.state = command.execute(this.state)
  }

  undo(){
    const res = this.stateStack.pop()
    if (res) {
      this.state = res
    }
    
    return this.state
  }
}

const addFourCommand = () => {
  return {
    execute(state: number) {
      return state + 4;
    }
  }
}

const multiplyByFourCommand = () => {
  return {
    execute(state: number) {
      return state * 4;
    }
  }
}

const csl = (val: any) => console.log(`current state => ${val}`)

const myMC = new mementoControllerClass(40);
csl(myMC.get())
myMC.execute(addFourCommand())
csl(myMC.get())
myMC.execute(multiplyByFourCommand())
csl(myMC.get())
myMC.undo()
csl(myMC.get())
myMC.undo()
csl(myMC.get())
myMC.undo()
csl(myMC.get())
myMC.undo()
csl(myMC.get())