interface ICoordinate {
  x: number;
  y: number;
}

// OveLoading with Unknown type
function parseCoordinate (arg1: string): ICoordinate
function parseCoordinate (arg1: number, arg2: number ): ICoordinate
function parseCoordinate (arg1: object): ICoordinate
function parseCoordinate(arg1: unknown, arg2?: unknown): ICoordinate {
  let res: ICoordinate = {
    x: 0,
    y: 0
  };

  if (typeof arg1 === 'number') {
    res['x'] = arg1 as number;
    res['y'] = arg2 as number;
  } else if (typeof arg1 === 'string') {
    const splitResult: string[] = arg1.split(',');
    splitResult.forEach( item => {
      const [key, value]: string[] = item.split(':')
      res[key as 'x' | 'y'] = parseInt(value,10) as number
    })
  } else if (typeof arg1 === 'object') {
    res = { ...arg1 } as ICoordinate;
  }

  return res;
}


console.log(parseCoordinate(1, 2))
console.log(parseCoordinate('x:10,y:20'))
console.log(parseCoordinate({x:15, y:25}))

// Overloading with type
type coordType = string | number | object;
function parseCoordinate2(arg1: coordType, arg2?: coordType): ICoordinate {
  let res: ICoordinate = {
    x: 0,
    y: 0
  };

  if (typeof arg1 === 'number') {
    res['x'] = arg1 as number;
    res['y'] = arg2 as number;
  } else if (typeof arg1 === 'string') {
    const splitResult: string[] = arg1.split(',');
    splitResult.forEach( item => {
      const [key, value]: string[] = item.split(':')
      res[key as 'x' | 'y'] = parseInt(value,10) as number
    })
  } else if (typeof arg1 === 'object') {
    res = { ...arg1 } as ICoordinate;
  }

  return res
}

console.log(parseCoordinate(12, 22))
console.log(parseCoordinate('x:101,y:202'))
console.log(parseCoordinate({x:105, y:205}))