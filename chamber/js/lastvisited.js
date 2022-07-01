function getLastVisit() {
    let today = Date.now();
    let mili = 86400000
    let visited = localStorage.getItem("lastVisit");
    let calculateDate = ((today - visited) / mili).toFixed();

    let welcome;
    if (!visited) {
        welcome = "Welcome!"
    } else {
        welcome = `Welcome Back! It has been ${calculateDate} days since you visited us!`
    }
    document.querySelector(".message").innerHTML = welcome;
    localStorage.setItem("lastVisit", today);
}
console.log(food)




getLastVisit()