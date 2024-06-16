document.querySelectorAll('.neumorphic').forEach(element => {
    element.addEventListener('click', () => {
        alert(`You clicked on ${element.classList[1]}!`);
    });
});
