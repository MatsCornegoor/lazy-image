# lazy-image-webcomponent
This component offers a simple method to lazy load images from a source set similar to responsive images. The component calculates it's rendered width and then fetches the the image with closest dimensions.


## Installation

### Node Modules
Install the component using npm.
```
npm install lazy-image-webcomponent --save
```
Add to main.js
```
import {lazyImages} from './lazyImages.js'
```

## Init
We will use the Intersection Observer API to track all individual components and check if they reach the viewport.

```
<lazy-image visible="false" srcset="0 images/img-1-placeholder.jpeg, 400 images/img-1-400.jpeg, 600 images/img-1-600.jpeg, 800 images/img-1-800.jpeg, 1000 images/img-1-1000.jpeg, 1200 images/img-1-1200.jpeg, 1400 images/img-1-1400.jpeg"></lazy-image>
```

```
lazyImages({});
```


## Init with sections
By tracking sections instead of indvidual images we can improve .

```
<lazy-image-section>
    <lazy-image visible="false" srcset="0 images/img-1-placeholder.jpeg, 400 images/img-1-400.jpeg, 600 images/img-1-600.jpeg, 800 images/img-1-800.jpeg, 1000 images/img-1-1000.jpeg, 1200 images/img-1-1200.jpeg, 1400 images/img-1-1400.jpeg"></lazy-image>
    <div class="spacer"></div>
    <lazy-image visible="false" srcset="0 images/img-2-placeholder.jpeg, 400 images/img-2-400.jpeg, 600 images/img-2-600.jpeg, 800 images/img-2-800.jpeg, 1000 images/img-2-1000.jpeg, 1200 images/img-2-1200.jpeg, 1400 images/img-2-1400.jpeg"></lazy-image>
</lazy-image-section>
<lazy-image-section>
    <lazy-image visible="false" srcset="0 images/img-3-placeholder.jpeg, 400 images/img-3-400.jpeg, 600 images/img-3-600.jpeg, 800 images/img-3-800.jpeg, 1000 images/img-3-1000.jpeg, 1200 images/img-3-1200.jpeg, 1400 images/img-3-1400.jpeg"></lazy-image>
</lazy-image-section>
```

```
lazyImages({
    sections: true,
});
```