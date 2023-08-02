import './lazy-image.js'

export function lazyImages(opt){

    let defaults = {sections: false, opt2: 'something'};
    let params = Object.assign(defaults, opt)


    if(params.sections == true){

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
            if(entry.isIntersecting){
                let images = entry.target.querySelectorAll("lazy-image");
                images.forEach((image) =>{
                    image.setAttribute("visible", "true");
                });

            } else {
                let images = entry.target.querySelectorAll("lazy-image");
                images.forEach((image) =>{
                    image.setAttribute("visible", "false");
                });
                
            }
            })
        })

        let sections = document.querySelectorAll('lazy-image-section');
        for(let i = 0; i < sections.length; i++){
            observer.observe(sections[i]);
        }


    } else{
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.setAttribute("visible", "true");
                // observer.unobserve(entry.target);
            } else {
                entry.target.setAttribute("visible", "false");
            }
            })
        })

        let images = document.querySelectorAll('lazy-image');
        for(let i = 0; i < images.length; i++){
            observer.observe(images[i]);
        }
    }

}