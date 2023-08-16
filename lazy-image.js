import {LitElement, css, html} from 'lit';
import { debounce } from 'throttle-debounce';

export class LazyImage extends LitElement {

    static styles = css`

        :host {
            display: flex;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            transition: 0.2s;
        }

    `;

    static properties = {
        srcset: {type: String},
        visible: {type: String},
    };

    constructor() {
        super();

        this.widthArray = [];
        this.imagesArray = [];
        this.prevRenderedWidth = 0;
        this.images = [];
    }

    connectedCallback() {
        super.connectedCallback();
        this.images = this.srcset.split(", ");

        for(let i = 0; i < this.images.length; i++){
            this.widthArray.push(this.images[i].split(" ")[0]);
            this.imagesArray.push(this.images[i].split(" ")[1]);
        }

        const resizeDebounce = debounce(400, () => {
            if(this.visible == "true"){
                this.selectHrImage();
            }
        });
        window.addEventListener('resize', resizeDebounce);
    }


    selectHrImage(){
        let thisComponent = this;
        let renderedWidth = thisComponent.offsetWidth;

        // only update the image if its rendered size is larger than previous image
        if (renderedWidth < this.prevRenderedWidth){
            return;
        } else {
            this.prevRenderedWidth = renderedWidth;
        }

        let closest = this.widthArray.reduce(function(prev, curr) {
            return (Math.abs(curr - renderedWidth) < Math.abs(prev - renderedWidth) ? curr : prev);
        });

        let index = this.widthArray.indexOf(closest)
        let newImg = thisComponent.shadowRoot.querySelector("img");
        newImg.src = this.imagesArray[index];
        newImg.style.opacity = "1";
    }


    updated(){
        if(this.visible == "true"){
            this.selectHrImage();
        }
    }


    render() {
        return html`
            <img type="image/jpeg" src="${this.imagesArray[0]}">
        `;
    }

}

customElements.define('lazy-image', LazyImage);





