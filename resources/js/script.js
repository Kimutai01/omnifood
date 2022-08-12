const products = [
    {
        name:"pilau", 
        image: "https://image.shutterstock.com/image-photo/lamb-madghout-popular-arabic-rice-260nw-479385196.jpg" ,
        price:300

    },
    {
        name:"chicken", 
        image:"https://media.istockphoto.com/photos/grilled-chicken-legs-with-vegetable-skewers-picture-id666710160?b=1&k=20&m=666710160&s=170667a&w=0&h=BoAPEGRbwf48TB-mrxeJZZNse2Es9ThceITXTcgDtrw=" ,
        price:100

    }, {
        name:"beef", 
        image: "https://media.istockphoto.com/photos/grilled-beef-steaks-picture-id882548344?k=20&m=882548344&s=612x612&w=0&h=9z9GtnI-RbEQCzxJDGDfHw-mMRN87w_ShHD8uCdrc6s=" ,
        price:100

    }, {
        name:"rice", 
        image: "https://media.istockphoto.com/photos/cooked-rice-picture-id491090528?k=20&m=491090528&s=612x612&w=0&h=oKwbkVWhU_17ZBhB4v3SKOTGT85nmi2YS7KbPPa-x8o=" ,
        price:200

    },
]

const newProducts = document.createElement('div')
products.forEach(product =>{
    document.querySelector('.bigproducts').innerHTML+= `
    <div>
    <p>${product.name}</p>
    <p>${product.price}</p>
    <img src=${product.image} alt="product image" />
    </div>
    
    `

})
