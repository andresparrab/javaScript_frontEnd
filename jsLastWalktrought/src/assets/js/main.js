alert("hello2")
let nav = document.createElement('nav')
let para = document.createElement('p')
let textnode = document.createTextNode("this inseide the nav")
para.appendChild(textnode)
let body = document.querySelector('body').children[0]
console.log(body)
nav.append(para)
body.before(nav)
