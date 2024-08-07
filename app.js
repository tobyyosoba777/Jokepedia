const jokeBtn = document.getElementById("jokeBtn")
jokeBtn.addEventListener("click", fetchJoke)


function fetchJoke() {
    const endpointSuffix = document.querySelector("#mySelect")
    const selectedValue = endpointSuffix.value
    const safeMode = (selectedValue === "Dark") ? "" : "?safe-mode";

    fetch(`https://v2.jokeapi.dev/joke/${selectedValue}${safeMode}`)
        .then(response => response.json())
        .then(data => {
            let jokeText = document.querySelector(".joke-text")
            let jokeResponse = document.querySelector(".joke-response")
            let category = document.querySelector(".category")
            let flagsContainer = document.querySelector(".flags")
            let flagList = data.flags
            jokeText.innerHTML = `<h2>${data.setup}</h2>`
            jokeResponse.innerHTML = `<h2>${data.delivery}</h2>`
            category.innerHTML = `<p>Category: ${data.category}</p>`

           flagsContainer.innerHTML = ""
           Object.entries(flagList).filter(([key, value]) => value).forEach(([key, value]) => {
            // Append each false flag as a list item to the flags container
            flagsContainer.innerHTML += `<p class="outline-text">${key}</p>`;
        });

    })
}

window.onload = fetchJoke




fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.flags)
    })