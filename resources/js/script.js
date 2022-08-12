const products = [
    {
        name:"pilau", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUlQKopxipnECjIiDmLWJUWXlyNSTFq0xqhJiDeq3&s" ,
        price:200

    },
    {
        name:"chicken", 
        image:"https://media.istockphoto.com/photos/grilled-chicken-legs-with-vegetable-skewers-picture-id666710160?b=1&k=20&m=666710160&s=170667a&w=0&h=BoAPEGRbwf48TB-mrxeJZZNse2Es9ThceITXTcgDtrw=" ,
        price:250

    }, {
        name:"beef stew", 
        image: "https://media.istockphoto.com/photos/chilli-with-meat-picture-id856600542?k=20&m=856600542&s=612x612&w=0&h=z8-_LZ2fllqcn7rVlssXXCRucQvUdy0d-1UnWRyiosI=" ,
        price:300

    }, {
        name:"rice", 
        image: "https://media.istockphoto.com/photos/cooked-rice-picture-id491090528?k=20&m=491090528&s=612x612&w=0&h=oKwbkVWhU_17ZBhB4v3SKOTGT85nmi2YS7KbPPa-x8o=" ,
        price:100

    },
    {
        name:"roasted meat", 
        image: "https://media.istockphoto.com/photos/beef-steaks-on-the-grill-picture-id520421898?k=20&m=520421898&s=612x612&w=0&h=mZQ4hWh32yUoxftPURzLM3O_owT_lpalSoCjkJ8PH0o=" ,
        price:699

    },
    {
        name:"Shawarma", 
        image:"https://media.istockphoto.com/photos/chicken-wrap-picture-id888366454?k=20&m=888366454&s=612x612&w=0&h=L0M1rbD5iqkxaCtkCJQtDvYKTOMlfExzZEA5Nq69Jhg=" ,
        price:450

    }, {
        name:"ugali and fish", 
        image: "https://i0.wp.com/kenyayote.com/wp-content/uploads/2019/08/Health-effects-of-eating-fish-Benefits-of-kenya-one-and-china.jpg?ssl=1" ,
        price:1300

    }, {
        name:"french fries", 
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZXN8ZW58MHx8MHx8&w=1000&q=80" ,
        price:199

    },
]

const newProducts = document.createElement('div')
products.forEach(product =>{
    document.querySelector('.bigproducts').innerHTML+= `
    <div class="singleproduct">
    <img src=${product.image} alt="product image" />
    <h3>${product.name}</h3>
    <p>${product.price}Ksh</p>
    </div>
    
    `

})
