const gridbutton = document.querySelector("#grid-view");
const listbutton = document.querySelector("#list-view");
const display = document.querySelector("article");



display.classList.add("grid");

gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

fetch("./json/data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
        

        const temples = jsonObject['temples'];

        for (temple of temples) {
            const section = document.createElement("section");
            section.id = "temple-info";
            let imgContainer = document.createElement("div");
            imgContainer.setAttribute("class", "imgContainer");
            const img = document.createElement("img");
            img.setAttribute("src", temple.image);
            


            const busName = document.createElement("p");
            busName.textContent = temple.name;
            const p1 = document.createElement("p");
            p1.textContent = temple.location;
            const p2 = document.createElement("p");
            p2.textContent = temple.dedicated;
            const web = document.createElement("a");
            web.href = temple.website;

            imgContainer.appendChild(img);
            section.appendChild(imgContainer);
            section.appendChild(busName);
            section.appendChild(p1);
            section.appendChild(p2);
            section.appendChild(web);

            document.querySelector(".directory-grid").appendChild(section);
        }
    });