<script>
    // Wait for the document to load before executing JavaScript
    document.addEventListener("DOMContentLoaded", function () {
        // Get the container element
        var container = document.getElementById("carousel-container");

        // Initialize Flickity carousel
        var flkty = new Flickity(container, {
            // Set the options for the carousel (you can customize these as needed)
            cellAlign: "center",
            contain: true,
            pageDots: false,
        });
    });
</script>