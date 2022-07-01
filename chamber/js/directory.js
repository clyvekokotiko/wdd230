const gridbutton = document.querySelector("#grid-view");
const listbutton = document.querySelector("#list-view");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

display.classList.add("grid");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

fetch("./json/data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.log(jsonObject);

        const businesses = jsonObject['businesses'];

        for (business of businesses) {
            const section = document.createElement("section");
            section.id = "business-info";
            let imgContainer = document.createElement("div");
            imgContainer.setAttribute("class", "imgContainer");
            const img = document.createElement("img");
            img.setAttribute("src", business.image);
            //img.setAttribute("alt", business.img-alt);//


            const busName = document.createElement("p");
            busName.textContent = business.name;
            const p1 = document.createElement("p");
            p1.textContent = business.address;
            const p2 = document.createElement("p");
            p2.textContent = business.phone;
            const web = document.createElement("a");
            web.href = business.website;

            imgContainer.appendChild(img);
            section.appendChild(imgContainer);
            section.appendChild(busName);
            section.appendChild(p1);
            section.appendChild(p2);
            section.appendChild(web);

            document.querySelector(".directory-grid").appendChild(section);
        }
    });