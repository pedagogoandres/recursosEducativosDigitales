document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.div-padre');
    let currentItem = 0;

    function showItem(index) {
        if (index < 0) {
            index = items.length - 1;
        } else if (index >= items.length) {
            index = 0;
        }

        items.forEach(item => {
            item.classList.remove('active');
        });

        items[index].classList.add('active');
        currentItem = index;
    }

    const prevBtns = document.querySelectorAll('.prev');
    const nextBtns = document.querySelectorAll('.next');

    prevBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showItem(currentItem - 1);
        });
    });

    nextBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showItem(currentItem + 1);
        });
    });

    // Show the initial item
    showItem(currentItem);
});