//select all elements with the "i" tag
//and store them in  a nodeList called "stars"

const stars = document.querySelectorAll(".star i");
console.log(stars);

//loop through the "stars" nodelist
stars.forEach((star, index1) => {
    // add an event listener that runs a function when the 
    //"click" event is triggered
    star.addEventListener("click", () => {
        console.log(index1);
        //loop through the "stars" nodelist again
        stars.forEach((star, index2) => {
            //if the current star is before the clicked star
            index1>=index2 ? star.classList.add("active") : star.classList.remove("active");

        })
    })
})    