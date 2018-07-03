//There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  return arr.find(function(value){
    return arr.indexOf(value) === arr.lastIndexOf(value);
  })
}
