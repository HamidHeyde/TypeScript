console.log('\n', '---------Factory Builder---------', '\n');

type hamburger = {
  meat: string,
  bread?: string,
  lettuce?: boolean,
  tomato?: boolean,
  ketchup?: boolean,
  pickle?: boolean,
}

const hamburgerDefaults = {
  meat: '200gr',
}

class buildAHamburger {
  constructor(private hamburger: hamburger = hamburgerDefaults) {}
  withBread = (bread: string) => {
    this.hamburger.bread = bread;
    return this;
  }
  withLettuce = (lettuce: boolean) => {
    this.hamburger.lettuce = lettuce;
    return this;
  }
  withTomato = (tomato: boolean) => {
    this.hamburger.tomato = tomato;
    return this;
  }
  withKetchup = (ketchup: boolean) => {
    this.hamburger.ketchup = ketchup;
    return this;
  }
  withPickle = (pickle: boolean) => {
    this.hamburger.pickle = pickle;
    return this;
  }

  build = () => {
    return this.hamburger;
  }
}

const hamburger1 = new buildAHamburger()
  .withBread('white')
  .withLettuce(true)
  .withTomato(true)
  .withKetchup(true)
  .withPickle(false)
  .build();

  console.log(hamburger1);