let input, button, greeting;

function input_setup() {
    input = createInput();
    input.position(1300, 150);
    button = createButton('Go!');
    button.position(input.x + input.width, 150);
    button.mousePressed(greet);
    greeting = createElement('h2', 'Number of cars :');
    greeting.position(1303, 119);
    greeting.style('font-size', '14px');
    greeting.style('font-family', 'Liberation Serif');
    greeting.style('font-style', 'normal');
}

function greet() {
    const number = input.value();
    input.value('');
}
