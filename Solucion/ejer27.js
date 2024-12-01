const colorSelect = document.getElementById("colorSelect");
        const body = document.querySelector("body");

        colorSelect.addEventListener("click", () => {
            body.style.backgroundColor = colorSelect.value; 
        });