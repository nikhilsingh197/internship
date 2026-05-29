const data = [1, 2, 8, 9, 45, 63, 1, 90, 100, 101]
let min= data[0]
for (let i = 0; i <=data.length; i++)
  {
  if (data[i] <min) {
    min = data[i]
   
  } 
}
console.log("minimum number in the array is =  " + min)