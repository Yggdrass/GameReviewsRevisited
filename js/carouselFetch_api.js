



const carouselContainer = document.querySelector(".carousel");




async function getCarousel() {
    try {
        const response = await fetch(corsFix);

        const json = await response.json();

        console.log(json);

        const results = json;


        
        
        

        for(let i = 0; i < results.length; i++) {
            console.log(results[i]);
            

            if (i === 4) {
                break;
            }

            carouselContainer.innerHTML += `<a href="${results[i].link}"><div class="carousel, carouselItems"><h1>${results[i].title.rendered}</h1>
                                            <img src="${results[i].better_featured_image.source_url}" class="img"/></a></div>`;
            
        }

    } catch (error) {
        console.log(error);
    }


}

getCarousel();







