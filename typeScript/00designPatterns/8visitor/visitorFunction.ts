import axios from 'axios';

const visitableFunction = async (baseURL: string, callBack: any) => {
  if (!baseURL) return callBack('');

  const response = await axios.get(baseURL);
  // console.log(response.data)
  callBack(response.data);
};

const callBack1 = (data: any) => {
  if (!data) return console.log('No Data');

  const res = data.products.map((item: any) => ({
    title: item.title,
    description: item.description
  }));

  console.log(res);
};

const callBack2 = (data: any) => {
  if (!data) return console.log('No Data');

  const res = data.products.map((item: any) => item.title);
  
  console.log(res);
};

(async () => {
  console.log('CALLBACK 1 --------------------');
  await visitableFunction('https://dummyjson.com/products?limit=3', callBack1);

  console.log('CALLBACK 2 --------------------');
  await visitableFunction('https://dummyjson.com/products?limit=3', callBack2);
})();
