const data=[12,"ani",true,false,001,[2,4,9,1001,7]]
console.log("array before use of functions=  "+data)
data[3]=21
console.log("length=  "+ data.length)
data.pop() //removes the last index element
data.push(20) //adds element to the last index 
data.slice(0,3) //removes the element between the indexes
data.unshift(20) //add element to the first index 
console.log(data)
data.shift() //removes the first index element 
console.log("array after all the functions =  "+data)