function addPromise (a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b==='number'){
    resolve(a+b);}else
    reject('both are not numbers');
  });
}

addPromise(2,3).then(function(result){
  console.log('success',result);
},function(err){
  console.log('promise error', err);
});
addPromise(2,'b').then(function(result){
  console.log('success',result);
},function(err){
  console.log('promise error', err);
});;
addPromise('c',3).then(function(result){
  console.log('success',result);
},function(err){
  console.log('promise error', err);
});;
