# jQuery.loadScroll
Simple jQuery extension for dynamically loading images while scrolling. Intended for image-heavy websites to save bandwidth and decrease intial load time.

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.loadScroll.js` in the `<head>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.loadScroll.js"></script>
```
## How to Use
Reference the `loadScroll()` method and use the `data-src` attribute for all dynamic loading images. The `data-src` changes to the standard `src` attribute as the image(s) enter the viewport. Placeholder images are optional. See the live demo: [code.nath.co/loadScroll](http://code.nath.co/loadScroll)

**HTML**
```html
<!-- Load on Scroll -->
<img id='1' data-src="a.png" src="#" alt="">
<img id='2' data-src="b.png" src="#" alt="">
<img id='3' data-src="c.png" src="#" alt="">
<img id='4' data-src="d.png" src="placeholder.png" alt="">  
```

**jQuery**
```javascript
$(function() {  

    // Default
    $('img').loadScroll(0,2);
    
    // Custom fadeIn Duration
    // 2 It's Number Of Image Load Before Scroll 
    $('img').loadScroll(500,2);
    
});
```  

## Browser Support
– Google Chrome  
– Safari ( Desktop & Mobile )  
– Internet Explorer ( 8, 9, 10+ )  
– Firefox  
– Opera ( Not Tested )  

## Release Notes
**jQuery.loadScroll 1.0**   
– Initial Release   
**jQuery.loadScroll 1.0.1**      
– Changed `isrc` attribute to `data-src` for HTML validation     
– Added paramater for `fadeIn` duration  

## Feedback
If you discover any issues or have questions regarding usage, please send a message to [code@nath.co](mailto:code@nath.co) or find me on GitHub [@nathco](https://github.com/nathco).
