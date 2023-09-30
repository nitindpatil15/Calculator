let view = document.getElementById('view');

function appendToview(value) {
    view.value += value;
}

function clearview() {
    view.value = '';
}

function calculate() {
    try {
        view.value = eval(view.value);
    } catch (e) {
        alert('Invalid operation');
        clearview();
    }
}
