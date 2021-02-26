const tablica = new Array();
function dodawanieDoTablicy(){
for(let i = 1; i < 100; i++){
tablica.push(i)
}
}
dodawanieDoTablicy()
console.log(tablica)



const wyszukiwanie = tablica.find((item,index) => {
    if(item === 45){
        return index
    }
    
})
console.log(wyszukiwanie)



const tablicaDruga = new Array(1,15,150,1500)


tablicaDruga.forEach(teb =>{
if(teb === 150) {

}
})

const tablicaDo1000 = new Array(1,5,6,213,1000)
const sprawdzenieCzyLiczbaJestRowna1000 = tablicaDo1000.some(item => item === 1000)
console.log(sprawdzenieCzyLiczbaJestRowna1000)

const tablicaCzwarta = new Array(12,5,8,130,44)

const jdjd = tablicaCzwarta.filter(item => {
    if(item >=10){
        return item
    }
})

console.log(jdjd)


const tablicaPiata = [5 , 10 ,55 , 130 ,1512]
const znajdz = tablicaPiata.find(element => element >10);
console.log(znajdz)