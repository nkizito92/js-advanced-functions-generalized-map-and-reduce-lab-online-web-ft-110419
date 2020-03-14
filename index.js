// Add your functions here

function map(array, callBack) {
  let newArray = []
  for (let i =0 ; i < array.length; i++) {
  let ele =  array[i]
    newArray.push(callBack(ele))
  }
  return newArray
}



const reduce = (array, callBack, startingpoint) => {
   let tr = (!!startingpoint) ? startingpoint : array[0]
  let i = (!!startingpoint) ? 0 : 1

  for (; i < array.length; i++) {
    tr = callBack(array[i], tr)
  }

  return tr;
}