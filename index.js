
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0







function increment() {
    count = count + 1
    countEl.innerText = count
}

function save(){
let countstr=count+"-"
saveEl.innerText += countstr
countEl.innerText = 0
count = 0


}  


