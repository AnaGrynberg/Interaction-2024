
var changeableElements = document.querySelectorAll('#changeable');

changeableElements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        element.textContent = 'and';
        this.classList.add('change-letter-and');
    });

    element.addEventListener('mouseout', function() {
        element.textContent = 'end';
        this.classList.remove('change-letter-and');
    });
});
