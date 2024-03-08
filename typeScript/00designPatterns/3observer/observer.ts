
type tCallback<T> = (data: T) => any;

type tObservable<T> = {
  subscribe: (cb: tCallback<T>) => () => void;
  notify: (data: T) => void;
}

// Function Implementation (Same as below)
export function observable<T>(): tObservable<T> {
  let observers: tCallback<T>[] = [];

  return {
    subscribe(cb: tCallback<T>) {
      observers.push(cb);
      return () => {
        observers = observers.filter((o) => o !== cb);
      };
    },
    notify(data: T) {
      observers.forEach((o) => o(data));
    }
  };
}

const obs1 = observable<number>();
const unSub1 = obs1.subscribe(console.log);
const unSub2 = obs1.subscribe((data) => console.log("I am a subscriber, and I got a data: ", data));
obs1.notify(1);
unSub1();
unSub2();
obs1.notify(3);

// Class implementation (Same as above)
export class Subscribable<T> {
  constructor(private subscribers: tCallback<T>[] = []) {}

  subscribe(cb: tCallback<T>) {
    this.subscribers.push(cb);
    return () => {
      this.subscribers = this.subscribers.filter((o) => o !== cb);
    };
  }

  notify(data: T) {
    this.subscribers.forEach((o) => o(data));
  }
}

// const obs1 = new Subscribable<number>();
// const unSub1 = obs1.subscribe(console.log);
// const unSub2 = obs1.subscribe((data) => console.log("I am a subscriber, and I got a data: ", data));
// obs1.notify(1);
// unSub1();
// unSub2();
// obs1.notify(3);
