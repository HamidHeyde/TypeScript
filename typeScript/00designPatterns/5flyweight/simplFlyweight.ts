import axios from 'axios';

(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');

    const data = response.data;
    // filter data
    const results = data?.products?.reduce(
      (
        acc: { id: string },
        { id }: { id: number }
      ) => {
        return {...acc, [`product_${id}`]: `https://dummyjson.com/products/${id}`};
      },
      {}
    );

    // console.log(results);

    // add proxy to console.log images when some specific product_12 is called (flyweight)
    // when a condition is satisfied then and only then another call would sent out
    const handler = {
      get: async function(target: {[key: string]: string}, property: string) {
        if (property === `product_12`) {
          const res = await axios.get(`${target[property]}`);
          const product = res.data;
          console.log(product)
          return target[property];
        } else {
          return target[property]
        }
      }
    }

    const Ps = new Proxy(results, handler);
    console.log(await Ps['product_11'])
    console.log(await Ps['product_12'])
    console.log(await Ps['product_13'])


  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    console.log(error);
  }
})();
