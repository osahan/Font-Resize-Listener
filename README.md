Font-Resize-Listener
====================

jQuery Plugin, provides a call back function as an option, whenever the browser font resized



# jQuery.fontResizeListner
Lightweight jQuery extension for listening font only resize (Zoom Text Only) and binding a callback to this event. 


## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.fontResizeListner.js` in the `<head>` or `<body>` (as you prefer) of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.fontResizeListner.min.js"></script>
```

## How to Use


**Syntax Example**  
```javascript

    $("body").fontResizeListner('',function(){
        console.log( "My callback is working");
    });

```

**Live Demo:** [http://jsfiddle.net/gg8b5go0/](http://jsfiddle.net/gg8b5go0/)