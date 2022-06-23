let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
  threshold: 0.25,
  rootMargin: "0px 0px 30px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  },imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

console.log(document.querySelector("#industry").getAttribute("data-src"));
//optimized pictures
// document.addEventListener("DOMContentLoaded", init);
// function init(){
//     let smallQuery = window.matchMedia("(max-width: 574px)");
//     let mediumQuery = window.matchMedia("(min-width: 574px)");
//     let largeQuery = window.matchMedia("(min-width: 1022px)");

//     if (smallQuery.matches){
//         //code
//         document.querySelector("#industry").getAttribute("src") = "images/industry-300.jpg";
        
//         console.log("testing");
        
//     }
//     else{
//         return;
//     }

//     if (mediumQuery.matches){
//         //code
//         document.querySelector("#industry").getAttribute("src") = "images/industry-600.jpg";
//     }
//     else{
//         return;
//     }

//     if (largeQuery.matches){
//         //code
//         document.querySelector("#industry").getAttribute("src") = "images/industry-960.jpg";
//     }
//     else{
//         return;
//     }
//   }
//   init();
 
