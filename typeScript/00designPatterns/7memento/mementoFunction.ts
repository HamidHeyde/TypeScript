type tMementoCommand<T> = {
  execute: (state: T) => T;
}

export const mementoController = <T>(initialState: T) => {
  let state: T = initialState
  const stateStack: T[] = []

  return {
    get(){
      return state
    },
    execute(command: tMementoCommand<T>){
      // push state into the stack
      stateStack.push(state)
      // run command => update the state
      state = command.execute(state)
    },
    undo(){
      const res = stateStack.pop()
      if (res) {
        state = res
      }
      
      return state
    }
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

const myMC = mementoController(30);
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