let Kiritilgan_soz = document.getElementById("Kiritilgan_soz")
let Salom = document.getElementById("Salom")

function soz(p){
    let s = [0,0,0,0,0]
    let b = p.split('')
    for(let item of b ){
if(item == "s"||item == 'S')
s[0]+=1
else if(item == 'a'||item == 'A')
s[1]+=1
else if(item == 'l'|| item == 'L')
s[2]+=1
else if(item == 'o'|| item == 'O')
s[3]+=1
else if(item == 'm'|| item == 'M')
s[4]+=1
}
let min = s[0]
for(let r of s){
    if (min>r)
    min = r
}
Salom.innerHTML = min
} 

let a = prompt('istalgan sozni kirirting')
Kiritilgan_soz.innerHTML =  a
soz(a)
