document.addEventListener("DOMContentLoaded", function () {

    const exploreButton = document.getElementById("exploreBtn");
    const moreProducts = document.getElementById("moreProducts");

    /*
        Explore More button
    */

    if (exploreButton && moreProducts) {

        exploreButton.addEventListener("click", function () {

            const isOpen = moreProducts.classList.contains("active");

            if (isOpen) {

                moreProducts.classList.remove("active");

                exploreButton.textContent = "Explore More";

            } else {

                moreProducts.classList.add("active");

                exploreButton.textContent = "Show Less";

            }

        });

    }

});