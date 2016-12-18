var pattern = Trianglify({
    height: 50,//document.body.clientHeight,
    width: document.body.clientWidth,
    cell_size: 20,
    x_colors: 'Greys',
    y_colors: 'Greys',
    variance: 0.05
});

document.body.appendChild(pattern.canvas());