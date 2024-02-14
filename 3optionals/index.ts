console.log('\n', '---------Optionals---------', '\n');

// functions
const func = (
  first: string,
  second: number,
  third?: Record<string, string>
) => {
  const obj: string[] = [];
  if (!!third)
    for (let key in third) {
      obj.push(`[${key} - ${third[key]}]`);
    }

  console.log(`${first} - ${second}${!third ? '' : ` - ${obj.join(' ')}`}`);
};

func('hello', 100);
func('hello', 100, { my: 'yes', you: 'no' });

// nested objects
interface User {
  id?: string
  info?: {
    email?: string
  }
}

const getEmail = (user:User): string => {
  return user?.info?.email || user?.id || 'Empty Record'
}

console.log(getEmail({}))
console.log(getEmail({
  id: 'qwerqwr'
}))
console.log(getEmail({
  id: 'qwerqwr',
  info: { email: "mail.google.com"}
}))

// function with callback
const funcWithCallback = (x:number, str: string, cb?: ()=> void) => {
  console.log("in parnet function")
  cb?.()
}

const someFunction: ()=>void = () => console.log("in Callback")

funcWithCallback(1, "hamid")
funcWithCallback(1, "hamid", someFunction)