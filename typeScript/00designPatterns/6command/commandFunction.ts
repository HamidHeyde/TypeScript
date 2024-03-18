type tCommand<T> = {
  execute: (state: T) => T;
  undo: (state: T) => T
}

type tCommandController<T> = {
  get: ()=>T,
  execute: (command: tCommand<T>) => void,
  undo: () => void
}

export const commandController = <T>(initialState: T): tCommandController<T>  => {
  let state: T = initialState
  const commandStack: tCommand<T>[] = []

  return {
    get(){
      return state
    },
    execute(command: tCommand<T>){
      // execute command
      state = command.execute(state)
      // push to stack
      commandStack.push(command)
    },
    undo(){
      // pop from stack
      const command = commandStack.pop()
      // execute undo
      if(command){
        state = command.undo(state)
      }
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

const myCC = commandController(10);
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