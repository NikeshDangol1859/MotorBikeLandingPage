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