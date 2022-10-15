// Dom manilpulation
// ------------------------

// 1. getElemenetById()
const title = document.getElementById("main-header")
console.log(title)
// change the color of the text
title.style.color="red"
// making function onclick change color back again
title.addEventListener("click", e => {
    title.style.color="green"
})

// 2. getElemenetByClassName()
const listItems = document.getElementsByClassName("list-items")
console.log(listItems)

// 3. getElemenetByTagName()
const listItem = document.getElementsByTagName("li")
console.log(listItem)

// 4. querySelector()
const container = document.querySelector("div")
console.log("querySelector gives : ",container)
// 5. querySelectorAll()
const contains = document.querySelectorAll("div")
console.log("QuerySelectoAll gives: ",contains)