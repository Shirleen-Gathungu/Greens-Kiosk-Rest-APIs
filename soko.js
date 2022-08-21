//    All Products
    let prods = document.getElementById("products")
    let url1 ="https://127.0.0.1:5500/products"
    fetch(url1)
    .then(function (response) {
    return response.json();
    })

    .then(data =>{
        return data.map(item =>{
            let newList = document.createElement("li");
            newList.innerHTML = item.element
            prods.append(newList)
        })
    })


// Fruits Section

let fruits = document.getElementById("fruList");
let u2 = "https://127.0.0.1:5500/products/fruits"
fetch(u2)
.then(function (response) {
return response.json();
})

.then(data =>{
    return data.map(fruit =>{
        let newList = document.createElement("li");
        newList.innerHTML = fruit.element
        fruits.append(newList)
    })
})


// Veggies Section
let veggies= document.getElementById("vegList");
let u3 =  "https://127.0.0.1:5500/products/vegetables";
fetch(u2=3)
.then(function (response) {
return response.json();
})

.then(data =>{
    return data.map(veg =>{
        let newList = document.createElement("li");
        newList.innerHTML = veg.element
        veggies.append(newList)
    })
})
