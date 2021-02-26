const arr = new Array(1,15,150,1500,"Jan",5525,"Henryk")

arr.forEach(arr =>{
    console.log(arr)
})

const sprawdzanie = arr.filter(item => {
    if(item > 1){
        return item
    }
})

console.log(sprawdzanie)

const indexDlaJana = arr.find((item,index)=>{
if(item === "Jan"){
    return index
}
})

console.log(indexDlaJana)