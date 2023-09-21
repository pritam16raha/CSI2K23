const product = [
    {
        id: 0,
        image: '../image/1.png',
        title: 'Hornet 160',
        price: 129000
    },

    {
        id: 1,
        image: '../image/2.png',
        title: 'hero xtream',
        price: 119000
    },

    {
        id: 2,
        image: '../image/3.png',
        title: 'pulsar ns 200',
        price: 149000
    },

    {
        id: 3,
        image: '../image/4.png',
        title: 'dominar 400',
        price: 249000
    },

    {
        id: 4,
        image: '../image/5.png',
        title: 'classic 350',
        price: 259000
    },

    {
        id: 5,
        image: '../image/6.png',
        title: 'ninja 300',
        price: 349000
    },

    {
        id: 6,
        image: '../image/7.png',
        title: 'KTM Duke 390',
        price: 329000
    },

    {
        id: 7,
        image: '../image/8.png',
        title: 'himalayan',
        price: 299000
    }
];

const categories = [...new Set(product.map((item) => 
    {
        return item
    }))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item) => 
{
    var{image, title, price} = item;
    return(
        `<div class = 'box'>
        <div class = 'img-box'>
        <img class= 'images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` + 
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`

    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(a) {
    let j = 0;
    // document.getElementById("count").innerHTML=cart.length;
    if(cart.length == 0 ){
        document.getElementById('cartItem').innerHTML = "your cart is empty";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items) => 
        {
            var{image, title, price} = items;
            return(
                `<div class = 'cart-item'>
                <div class='row-img'>
                <img class= 'rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` + 
                "<i class ='fa solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"

            );
        }).join('');
    }
}