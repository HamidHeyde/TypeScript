type tMyObj = {
  [key: string]: number
}
const myObj: tMyObj = {
  first: 1,
  second: 2
}

const handler = {
  get: function(target: tMyObj, property: string) {
    console.log('getting', property);
    return target[property];
  },
  set: function(target: tMyObj, property: string, value: number) {
    console.log('setting', property, value);
    target[property] = value;
    return true;
  }
}

const proxy1 = new Proxy(myObj, handler);
console.log(proxy1)
proxy1["third"]= 3
proxy1["first"]= 4
console.log(proxy1)
console.log(proxy1['first'])