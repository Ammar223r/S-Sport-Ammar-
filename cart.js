// item
let list= document.querySelector(".list")

let shopping =document.querySelector('.shopping')
let big =document.querySelector('body')
let cartTab= document.querySelector(".cart-tab")
let closeCart= document.querySelector(".close11") 

// show product in cart 
// reload card 
let ListCard=document.querySelector('.ListCard')

// product to cart 
// اول فانكشن يتخزن الظغطات على المنتجات
let quantity =document.querySelector('.quantity')

// show checkout
let payment= document.querySelector(".payment")
let close= document.querySelector(".close")

// show checkout in cart
let productBtn= document.querySelector(".chekout");

// show login in home 
let login = document.querySelector('.login')
let close2= document.querySelector(".close2")
let productBtn1= document.querySelector("#showLogin");


// show login in home 
productBtn1.addEventListener('click',()=>{
    login.style.display="grid";
});
close2.addEventListener('click',()=>{
    login.style.display="none";
});
// item 
let products = [
    {
    id:1,
    name:'Jordan Spizike',
    image:'./image/r2.png',
    price:50.00,
    p:"Lorem ipsum dolor sit amet consectetur ",
    quntity:2
    }
    ,
    {
        id:2,
        name:'Air Force',
        image:'./image/r3.png',
        price:60.00,
        p:"Lorem ipsum dolor sit amet consectetur ",
        quntity:5
    }
    ,
    {
        id:3,
        name:'Air Jorden',
        image:'./image/r4.png',
        price:100.00,
        p:"Lorem ipsum dolor sit amet consectetur ",
        quntity:4
    }
    ,
    {
        id:4,
        name:'SuperStar',
        image:'./image/r5.png',
        price:45.00,
        p:"Lorem ipsum dolor sit amet consectetur ",
        quntity:5
    }
    ,
    {
        id:5,
        name:'NMD R1',
        image:'./image/r6.png',
        price:75.00,
        p:"Lorem ipsum dolor sit amet consectetur ",
        quntity:3
    }
    ,
    {
        id:6,
        name:'Samba Og',
        image:'./image/r6.png',
        price:75.00,
        p:"Lorem ipsum dolor sit amet consectetur ",
        quntity:6
    }
];


// item
let listCards =[];
function initApp (){
    products.forEach((Value,Key)=>{
        // first Dom
        // Dynamic Object Model
        let newDiv =document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML=`
        <img class="iim" src="${Value.image}">
        <h3 class="title">${Value.name}</h3>
        <p class="p1">${Value.p}</p>
        <price>${Value.price.toLocaleString()}</price>
        <p class="p2">${Value.quntity}</p>
        <button class="buy" onclick="addToCart"> Add to Cart</button>
        `
        list.appendChild(newDiv);
    })
};
initApp();
// item\

// product to cart 
// اول فانكشن يتخزن الظغطات على المنتجات

function addToCart(key) {
    if(listCards[key]==null){
        listCards[key]=products[key]
        listCards[key].quntity=1;
    }
    reloadCard();
}
// reload card 

function reloadCard() {
    ListCard.innerHTML=""
    let count=0;
    let totalPrice=0;
    listCards.forEach((Value, key)=>{
        totalPrice = totalPrice + Value.price;
        count = count + Value.price;
        if(Value !=null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML=`
            <div><img src="${Value.image}"/></div>;
            <div>${Value.name}</div>;
            <div>${Value.price.toLocaleString()}</div>;
            <div>
            <button onclick="changeQuantity(${key}, ${Value.quantity-1})">-</button>
            <button onclick="changeQuantity(${key}, ${Value.quantity+1})">+</button>
            </div>
            `
            ListsCard.appendChild(newDiv);
        };
    });
    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerText =count;
}


function changeQuantity (key ,quantity) {
    if (quantity==0) {
        delete listCards[key];
    }
    else {
        listCards[key].quntity =quantity;
        listCards[key].price =quantity* products[key].price;
    }
    reloadCard();

}

// show cart
shopping.addEventListener('click',()=>{
    big.classList.add('showcart')
})
closeCart.addEventListener('click',()=>{
    big.classList.remove('showcart');
})


// show checkout
productBtn.addEventListener('click',()=>{
    payment.style.display="grid";
});
close.addEventListener('click',()=>{
    payment.style.display="none";
});















