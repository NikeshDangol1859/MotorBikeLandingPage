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