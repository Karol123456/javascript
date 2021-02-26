const arr = new Array(1,15,150,1500,"Jan",5525,"Henryk")

arr.forEach(arr =>{
    console.log(arr)
})

const indexDlaJana = arr.find((item,index)=>{
if(item === "Jan"){
    return index
}
})

console.log(indexDlaJana)

const sprawdzanieArr = arr.some(item => item > 1)
console.log(sprawdzanieArr)

