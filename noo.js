var el =document.querySelectorAll('.color-switcher li')
var classesList = [];

// loop
for (var i =0; i < el.length; i++) {
    // grt classes list
    classesList.push(el[i].getAttribute('data-color'));
}
console.log(classesList)
