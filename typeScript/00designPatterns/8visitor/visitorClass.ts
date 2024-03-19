import axios from 'axios';

export class visitableClass {
  private baseURL: string = '';

  constructor(baseURl: string) {
    this.baseURL = baseURl;
  }

  async accept(visitor: any) {
    if (!this.baseURL) return visitor.visit('');

    const response = await axios.get(this.baseURL);
    // console.log(response.data)
    visitor.visit(response.data);
  }
}

const visitor1 = () => {
  return {
    visit(data: any) {
      if (!data) return console.log('No Data');

      const res = data.products.map((item: any) => ({
        title: item.title,
        description: item.description
      }));
      console.log(res);
    }
  };
};

const visitor2 = () => {
  return {
    visit(data: any) {
      if (!data) return console.log('No Data');

      const res = data.products.map((item: any) => item.title);
      console.log(res);
    }
  };
};

//----------------------
(async () => {
  const myVisitableClass = new visitableClass(
    'https://dummyjson.com/products?limit=5'
  );
  console.log('VISITOR 1 --------------------');
  await myVisitableClass.accept(visitor1());

  console.log('VISITOR 2 --------------------');
  await myVisitableClass.accept(visitor2());
})();
