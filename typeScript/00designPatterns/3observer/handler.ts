type tCallback<T> = (data: T) => any;

// Function Implementation (Same as below)
export function observableHandler<T>() {
  let observers: tCallback<T>[] = [];

  return {
    subscribe(cb: tCallback<T>) {
      observers.push(cb);
      return () => {
        observers = observers.filter((o) => o !== cb);
      };
    },
    notify(data: T) {
      for (const o of observers) {
        const res = o(data);
        if (data !== undefined) {
          break;
        }
      }
    }
  };
}

// Class implementation (Same as above)
export class SubscribableHandler<T> {
  constructor(private subscribers: tCallback<T>[] = []) {}

  subscribe(cb: tCallback<T>) {
    this.subscribers.push(cb);
    return () => {
      this.subscribers = this.subscribers.filter((o) => o !== cb);
    };
  }

  notify(data: T) {
    for (const s of this.subscribers) {
      const res = s(data);
      if (data !== undefined) {
        break;
      }
    }
  }
}
