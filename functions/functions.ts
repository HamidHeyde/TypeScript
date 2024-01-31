// function with args and return type
export const addNumbers = (a: number, b: number): number => (a+b)

export const concatStrings = (a: string, b?: string): string => (!!b ? `${a} - ${b}` : `${a}`)

export const concatMultiStrings = (a: string, ...args: string[]): string => {
   if (!args || !args.length) return `${a}`

  return `${a} - ${args.join(' * ')}`
}
