const data = [1, 2, 8, 9, 45, 63, 1, 90, 100, 101]
let max = data[0]
for (let i = 0; i < data.length; i++)
  {
  if (data[i] > data[i + 1]) {
    max = data[i]
   
  } 
}
console.log("maximum number in the array is =  " + max)