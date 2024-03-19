function* iterableBasic() {
    yield 1;
    yield 2;
    yield 3;
}

const iteratorBasic = () => {
  const iBasic = iterableBasic();
  
  let nextVal = iBasic.next();
  while (!nextVal.done) {
    console.log(nextVal);
    nextVal = iBasic.next();
  }
}


iteratorBasic()