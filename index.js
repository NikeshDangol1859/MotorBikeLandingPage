// product page
const products = [
    {
        image: "/images/bikes/Karizma.png",
        name: "Hero Karizma",
        price: "1,80,900",
        brand: "Hero",
        model: "Splendor",
        engine: "210cc",
        transmission: "6 Speed",
        color: "Red",
        fuel: "12L",
        mileage: "60",
        speed: "250km/h",
        weight: "180kg",
        type: "standard",
    },
    {
        image: "/images/bikes/Pulsar.png",
        name: "Bajaj Pulsar",
        price: "4,13,900",
        brand: "Bajaj",
        model: "Pulsar 150",
        engine: "149cc",
        transmission: "5 Speed",
        color: "Black",
        fuel: "12L",
        mileage: "60",
        speed: "180km/h",
        weight: "150kg",
        type: "standard",
    },
    {
        image: "/images/bikes/rtr.png",
        name: "RTR 200 4V",
        price: "2,10,000",
        brand: "TVs",
        model: "RTR 200 4V",
        engine: "198cc",
        transmission: "5 Speed",
        color: "Black",
        fuel: "12L",
        mileage: "60",
        speed: "180km/h",
        weight: "148kg",
        type: "sports",
    },
    {
        image: "/images/bikes/dukati.png",
        name: "Bajaj Pulsar",
        price: "4,13,900",
        brand: "Bajaj",
        model: "Pulsar 150",
        engine: "149cc",
        transmission: "5 Speed",
        color: "Black",
        fuel: "12L",
        mileage: "60",
        speed: "180km/h",
        weight: "150kg",
        type: "standard",
    },
    {
        image: "/images/bikes/xr.png",
        name: "RTR 200 4V",
        price: "2,10,000",
        brand: "TVs",
        model: "RTR 200 4V",
        engine: "198cc",
        transmission: "5 Speed",
        color: "Black",
        fuel: "12L",
        mileage: "60",
        speed: "180km/h",
        weight: "148kg",
        type: "sports",
    },
    {
        image: "/images/bikes/xpulse.png",
        name: "Hero Karizma",
        price: "1,80,900",
        brand: "Hero",
        model: "Splendor",
        engine: "210cc",
        transmission: "6 Speed",
        color: "Red",
        fuel: "12L",
        mileage: "60",
        speed: "250km/h",
        weight: "180kg",
        type: "standard",
    },
    {
        image: "/images/bikes/suzuki.png",
        name: "Bajaj Pulsar",
        price: "4,13,900",
        brand: "Bajaj",
        model: "Pulsar 150",
        engine: "149cc",
        transmission: "5 Speed",
        color: "Black",
        fuel: "12L",
        mileage: "60",
        speed: "180km/h",
        weight: "150kg",
        type: "standard",
    },
    {
        image: "/images/bikes/r15.png",
        name: "RTR 200 4V",
        price: "2,10,000",
        brand: "TVs",
        model: "RTR 200 4V",
        engine: "198cc",
        transmission: "5 Speed",
        color: "Black",
        fuel: "12L",
        mileage: "60",
        speed: "180km/h",
        weight: "148kg",
        type: "sports",
    },
    
];

const productGrid = document.getElementById("productGrid");
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle products and take the first 6
const randomProducts = shuffleArray([...products]).slice(0, 6);

randomProducts.forEach((product) => {
    const productItem = `
        <div class="product_item">
            <div class="image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product_info">
                <h3>${product.name}</h3>
                <p class="price">Price: Rs. ${product.price}</p>
                <div class="heads">
                <div class="icon">
                <p><strong><i class="fa-solid fa-motorcycle"></i></strong></p>                
                <p><strong>${product.engine}</strong></p>
                </div>
                <div class="icon">
                <p><strong><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M2 22H13C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.36745 4 4.49744 7.50005 4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M18.5 5.5L19.5 4.5M5.5 4.5L6.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.5001 9.00003L13.5608 11.9394M13.5608 11.9394C13.2893 11.6679 12.9143 11.5 12.5001 11.5C11.6717 11.5 11.0001 12.1716 11.0001 13C11.0001 13.8285 11.6717 14.5 12.5001 14.5C13.3285 14.5 14.0001 13.8285 14.0001 13C14.0001 12.5858 13.8322 12.2108 13.5608 11.9394Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M12.5 3.5V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.5 2H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2 15H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2 19H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></strong></p>
                <p><strong>${product.speed}</strong></p>
                </div>
                <div class="icon">
                <p><strong><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M10.4626 13L9.06858 14.8124C8.91919 15.0066 9.02626 15.2861 9.26987 15.3378L10.7301 15.6477C10.9899 15.7028 11.0889 16.0122 10.9073 16.2011L9.17773 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 21L4 9C4 6.17157 4 4.75736 4.87868 3.87868C5.75736 3 7.17157 3 10 3C12.8284 3 14.2426 3 15.1213 3.87868C16 4.75736 16 6.17157 16 9L16 21H4Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M2 21H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 14H17.6667C17.9767 14 18.1317 14 18.2588 14.0341C18.6039 14.1265 18.8735 14.3961 18.9659 14.7412C19 14.8683 19 15.0233 19 15.3333V16.5C19 17.3284 19.6716 18 20.5 18C21.3284 18 22 17.3284 22 16.5V10.2111C22 9.60998 22 9.30941 21.9142 9.02598C21.8284 8.74255 21.6616 8.49247 21.3282 7.9923L20.5547 6.83205C20.2082 6.31223 19.6247 6 19 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></strong></p>
                <p><strong>${product.fuel}</strong></p>
                </div>
                <div class="icon">
                <p><strong><i class="fa-solid fa-weight-scale"></i></strong></p>                
                <p><strong>${product.weight}</strong></p>                                
                </div>
                


                </div>
                
            </div>
        </div>
    `;
    productGrid.innerHTML += productItem;
});


// news page
const news =[
    {
        image:"/images/dirt.png ",
        title: "Lorem ipsum dolor sit amet, consectetur",
        news:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quod ipsa illum harum impedit fugit. Unde fugit ut omnis nihil vel consequatur debitis? Ipsa repellendus magnam, nulla quibusdam nihil sapiente!",
        day: "01 Jan",
    },
    {
        image:"/images/dirt.png ",
        title: "Lorem ipsum dolor sit amet, consectetur",
        news:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quod ipsa illum harum impedit fugit. Unde fugit ut omnis nihil vel consequatur debitis? Ipsa repellendus magnam, nulla quibusdam nihil sapiente!",
        day: "10 Jan",
    },
    {
        image:"/images/dirt.png ",
        title: "Lorem ipsum dolor sit amet, consectetur",
        news:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quod ipsa illum harum impedit fugit. Unde fugit ut omnis nihil vel consequatur debitis? Ipsa repellendus magnam, nulla quibusdam nihil sapiente!",
        day: "13 Jan",
    },
    {
        image:"/images/dirt.png ",
        title: "Lorem ipsum dolor sit amet, consectetur",
        news:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quod ipsa illum harum impedit fugit. Unde fugit ut omnis nihil vel consequatur debitis? Ipsa repellendus magnam, nulla quibusdam nihil sapiente!",
        day: "18 Jan",
    },
    
    {
        image:"/images/dirt.png ",
        title: "Lorem ipsum dolor sit amet, consectetur",
        news:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quod ipsa illum harum impedit fugit. Unde fugit ut omnis nihil vel consequatur debitis? Ipsa repellendus magnam, nulla quibusdam nihil sapiente!",
        day: "21 Jan",
    },
    {
        image:"/images/dirt.png ",
        title: "Lorem ipsum dolor sit amet, consectetur",
        news:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quod ipsa illum harum impedit fugit. Unde fugit ut omnis nihil vel consequatur debitis? Ipsa repellendus magnam, nulla quibusdam nihil sapiente!",
        day: "25 Jan",
    },
    {
        image:"/images/dirt.png ",
        title: "Lorem ipsum dolor sit amet, consectetur",
        news:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quod ipsa illum harum impedit fugit. Unde fugit ut omnis nihil vel consequatur debitis? Ipsa repellendus magnam, nulla quibusdam nihil sapiente!",
        day: "31 Jan",
    },
]
const newsGrid = document.getElementById('newsGrid')
const newsToshow = news.slice(0,6);
newsToshow.forEach((news) =>{
    const newsItem = `
    <div class="latest_news">
    <div class="image">
    <img src="${news.image}" alt="News Image">
    </div>
    <div class="news_info">
    <div class="date">
    ${news.day}
    </div>
    <div class="news_content">
    <h2>${news.title}</h2>
    <a href="/"><p> Read More <i class="fa-solid fa-arrow-right"></i></p> </a>
    </div>
    </div>
                            
    </div>
    
    
    `;
    newsGrid.innerHTML += newsItem;

})

// events
const events =[
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quod ipsa illum harum impedit fugit. Unde fugit ut omnis nihil vel consequatur debitis? Ipsa repellendus magnam, nulla quibusdam nihil sapiente!",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quod ipsa illum harum impedit fugit. Unde fugit ut omnis nihil vel consequatur debitis? Ipsa repellendus magnam, nulla quibusdam nihil sapiente!",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quod ipsa illum harum impedit fugit. Unde fugit ut omnis nihil vel consequatur debitis? Ipsa repellendus magnam, nulla quibusdam nihil sapiente!",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quod ipsa illum harum impedit fugit. Unde fugit ut omnis nihil vel consequatur debitis? Ipsa repellendus magnam, nulla quibusdam nihil sapiente!",
    },
]
const eventGrid = document.getElementById('eventGrid')
const eventToshow = events.slice(0,3);
eventToshow.forEach((events) =>{
    const eventItem = `
    <div class="our_events">
    <div class="title">
    <h2>${events.title}</h2>
    </div>
    <div class="description">
    <p>${events.description}</p>
    </div>
    <div class="readmore">
    <a href="/"> Keep Reading <i class="fa-solid fa-arrow-right"></i></a>
    </div>
                            
    </div>
    
    
    `;
    eventGrid.innerHTML += eventItem;

})
 