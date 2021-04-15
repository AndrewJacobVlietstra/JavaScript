(function () {
    const header = document.querySelector('h2');
    header.style.color = 'red';
    
    document.body.addEventListener('click', function(){
        header.style.color = 'blue';
    });
})();