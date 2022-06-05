
window.onload = get_year();
window.onload = get_date();

function get_date() {
    let lastModifiedDate = new Date(document.lastModified);
    document.getElementById("date").innerHTML = lastModifiedDate;
}

function get_year() {
    let date =  new Date().getFullYear();
    document.querySelector("#year").innerHTML = date;
}

const list = document.querySelector('ul');
const input = document.querySelector('#fav-chapter');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    if (input.value.length == 0 ) {
        alert("Text field is blank");
    } else {
        let favchap = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.innerHTML = favchap;
        listItem.appendChild(listBtn);
        listBtn.innerHTML = '❌';
        list.appendChild(listItem);

        listBtn.addEventListener('click', function() {
            list.removeChild(listItem);
        });
        input.focus('');
    }
});
