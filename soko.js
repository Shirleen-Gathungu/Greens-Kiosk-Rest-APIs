//    All Products
    
    let url1 ="https://gist.githubusercontent.com/Shirleen19/919f4be409e7c4785b26fd37ee965cc2/raw/002657a4a947fe2c42f1ad13cbf8308ed982a183/products.json"
    fetch(url1)
    .then(function (response) {
     return response.json();
    })

    .then(data =>{
        console.log(data);
        return data.map(item =>{
            let prods = document.getElementById("products")
            console.log(`${item.name} is a ${item.category}`);
            let newList = document.createElement("li");
            newList.innerHTML =`${item.name} is a ${item.category}`
            prods.append(newList)

            // Fruits Section

   if(item.category === "fruits" ){
   let fruits = document.getElementById("fruList");
   let newList = document.createElement("li");
        newList.innerHTML = item.name
        fruits.append(newList)
   }


// // Veggies Section
if(item.category === "vegetables"){
let veggies= document.getElementById("vegList");
let newList = document.createElement("li");
    newList.innerHTML =item.name
     veggies.append(newList)

}


// .then(data =>{
//     return data.map(fruit =>{
//     
//     })
// })


        })
    })

    //Steps

// Successfully fetch and console.log contents of products.json.
// Map through products.json data and create two new veggies and fruits arrays.
// Map veggie and fruits array and inject to dom.









// .then(function (response) {
// return response.json(get);
// })

// .then(data =>{
//     return data.map(veg =>{
//         
//     })
// })
