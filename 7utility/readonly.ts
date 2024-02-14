// ReadOnly
interface iCat {
  name: string
  says: string
}

/**
 * How to use readonly:
 * 1. create a type or extend the interface 
 * 2. inline Readonly<...>
 * 3. only to a key i.e. { readonly a: 3, b:4}
 */

interface iCat2 {
  readonly name: string
  says: string
}

type tReadonlyCat = Readonly<iCat>

export const myCat = (name: string, says: string): Readonly<iCat> => {
  return ({ name, says })
}

const theCate = myCat("Abi", "meow")
console.log("initial Values=>", theCate)
// theCate["name"] = "Meshki" <<== Error
console.log("after update=>", theCate)

// Const
/**
 * const for arrays and object is not being applied to the content of those types
 * in order to make them immutable we can use the CONST type
 * It will transform the whole content to READONLY type mentioned above
 */

const reallyConstArray = [1,2,3] as const  
//  reallyConst[0] = 6 <<== Error

console.log(reallyConstArray)

const reallyConstObject = {
  a:2, b:3
} as const
// reallyConstObject['a'] = 72  <<== ERROR

console.log([reallyConstObject])

