document.querySelectorAll('.clay').forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('animate');
        setTimeout(() => {
            element.classList.remove('animate');
        }, 500);
    });
});
