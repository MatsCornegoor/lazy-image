import './style.css'
import './lazy-image.js'


// function observeLazyImages(){
//     document.addEventListener('DOMContentLoaded', ()=>{
  
//         const lazyImages = document.querySelectorAll('lazy-image');
        
//         const loadImg = (entries, observer) => {
//             const [entry] = entries;
//             if(!entry.isIntersecting) return;
//             entry.target.setAttribute("visible", "true");
//             observer.unobserve(entry.target);
//         };
    
//         const imgObserver = new IntersectionObserver(loadImg, {
//             root: null,
//             threshold: 0.5,
//         })
//         lazyImages.forEach(img => imgObserver.observe(img));
//     })
// }
// observeLazyImages();


function observeLazyImages(){

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            // console.log("true");
            entry.target.setAttribute("visible", "true");
            // observer.unobserve(entry.target);
          } else {
            // console.log("false");
            entry.target.setAttribute("visible", "false");
          }
        })
    })

    let images = document.querySelectorAll('lazy-image');
    for(let i = 0; i < images.length; i++){
        observer.observe(images[i]);
    }

}

observeLazyImages();