// var pattern = Trianglify({
//     height: document.getElementById("nav").clientHeight,
//     width: document.body.clientWidth,
//     cell_size: 20,
//     x_colors: ['#c0b283', '#efefef'],
//     y_colors: ['#b9deed', '#efefef'],
//     variance: 0.3
// });
//
// // Serialize the SVG object to a String
// var m = new XMLSerializer().serializeToString(pattern.svg());
//
// // Perform the base64 encoding of the String
// var k = window.btoa(m);
//
// // Query the element to set the background image property
// var element = document.getElementsByTagName('div')[0];
//
// // Set the background image property, including the encoding type header
// element.style.backgroundImage = 'url("data:image/svg+xml;base64,' + k + '")';