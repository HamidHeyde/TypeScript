/**
 * This code will pull a new page of data from a given API
 */

import axios from 'axios';

async function* urlFetcher() {
  let skip = -3
  let url = ``;
  let data = []
  do{
    skip = skip+3
    console.log(skip);
    url = `https://dummyjson.com/products?limit=3&skip=${skip}`;
    const response = await axios.get(url);
    data = response?.data?.products;
    
    yield data.map((item: any) => ({ title: item.title}));
  } while(data)
}


(async () => {
  const urlIterator = urlFetcher();
  
  // Approach 1
  // console.log(await urlIterator.next());
  // console.log(await urlIterator.next());
  // console.log(await urlIterator.next());


  // Approach 2
  // for await (const item of urlIterator) {
  //   console.log(item);
  // }

  // Approach 3
  // let counter = 0;
  // for await (const item of urlIterator) {
  //   console.log(item);
  //   counter++;
  //   if(counter > 3) break;
  // }

  // Approach 4
  for (let i=0; i<3; i++) { 
    const item = await urlIterator.next();
    console.log(item);
    
    if (item.done) break;
  }
})()