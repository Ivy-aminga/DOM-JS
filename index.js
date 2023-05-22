
document.body.style.backgroundColor = 'silver'

document.getElementById('title').style.color='green'
document.getElementById('title').style.fontSize = '40px'
document.getElementById('title').style.textAlignLast='center'

document.getElementById('para').style.fontSize='24px'
document.getElementById('para').style.color='brown'

document.getElementById('fru').style.textTransform='Uppercase'
document.getElementById('veg').style.textTransform='Uppercase'

let newFruit = document.createElement("li")
newFruit.innerHTML= "Grapes"
document.getElementById("fruList").appendChild(newFruit);

let newVeg = document.createElement("li")
newVeg.innerHTML= "Spinach"
document.getElementById("vegList").appendChild(newVeg);




