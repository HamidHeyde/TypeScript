type tCommand<T> = {
  execute: (state: T) => T;
  undo: (state: T) => T
}

type tCommandController<T> = {
  get: ()=>T,
  execute: (command: tCommand<T>) => void,
  undo: () => void
}

export class commandController<T> implements tCommandController<T> {
  private state: T;
  private commandStack: tCommand<T>[] = []

  constructor(initialState: T){
    this.state = initialState
  }

  get(){
    return this.state
  }
  execute(command: tCommand<T>){
    // execute command
    this.state = command.execute(this.state)
    // push to stack
    this.commandStack.push(command)
  }
  undo(){
    // pop from stack
    const command = this.commandStack.pop()
    // execute undo
    if(command){
      this.state = command.undo(this.state)
    }
  }
}

const addTwoCommand = () => {
  return {
    execute(state: number){
      return (state+2)
    },
    undo(state: number){
      return (state-2)
    }
  }
}

const multiplyByTwoCommand = () => {
  return {
    execute(state: number){
      return (state*2)
    },
    undo(state: number){
      return (Math.floor(state/2))
    }
  }
}

const csl = (val: any) => console.log(`current state => ${val}`)

const myCC = new commandController(20);
csl(myCC.get())
myCC.execute(addTwoCommand())
csl(myCC.get())
myCC.execute(multiplyByTwoCommand())
csl(myCC.get())
myCC.undo()
csl(myCC.get())
myCC.undo()
csl(myCC.get())
myCC.undo()
csl(myCC.get())
myCC.undo()
csl(myCC.get())