function toggleMenu (){
    document.getElementById("nav-closed").classList.toggle("open");
    
}

document.getElementById("hambuger-btn").onclick = toggleMenu;

document.querySelector("#last-modified").textContent = document.lastModified