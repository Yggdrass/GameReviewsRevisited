
//Show All Reviews Button:

const showAllButton = document.querySelector('.button_showAll');

const showAllReviewsContainer = document.querySelector(".button_showAll")

const buttonCarousel1 = document.querySelector('#button_carousel_circle1');
const buttonCarousel2 = document.querySelector('#button_carousel_circle2');
const buttonCarousel3 = document.querySelector('#button_carousel_circle3');

showAllButton.onclick = async function() {
    try {
        const response = await fetch(corsFix);

        const json = await response.json();

        console.log(json);

        const results = json;

        resultsContainer.innerHTML = "";

        for(let i = 0; i < results.length; i++) {
            console.log(results[i]);

            

            resultsContainer.innerHTML += `<a href="${results[i].link}"><div class="blogpost">
                                                <h1 class="thumbnailTitle">${results[i].title.rendered}</h1>
                                               <img src="${results[i].better_featured_image.source_url}" class="reviewThumbnail">
                                               </a></div>`;

            showAllReviewsContainer.style.display = "none";
            
        }

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = error
    }
}

//Carousel circle-buttons:


buttonCarousel1.onclick = async function() {
    try {
        const response = await fetch(corsFix);

        const json = await response.json();

        console.log(json);

        const results = json;

        carouselContainer.innerHTML = "";

        for(let i = 0; i < results.length; i++) {
            console.log(results[i]);

            if (i === 10) {
                break;

            carouselContainer.innerHTML += `<a href="${results[i].link}"><div class="blogpost">
                                                <h1 class="thumbnailTitle">${results[i].title.rendered}</h1>
                                               <img src="${results[i].better_featured_image.source_url}" class="reviewThumbnail">
                                               </a></div>`;
            
                                            }
                                    
    } 
}catch (error) {
        console.log(error);
        carouselContainer.innerHTML = error;}
}

