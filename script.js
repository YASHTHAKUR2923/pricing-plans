document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-select');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for choosing our plan!');
        });
    });
});