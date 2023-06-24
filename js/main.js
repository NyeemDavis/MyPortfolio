anchors = document.querySelectorAll('.header-anchor[href^="#"');
// This function is used to scroll to the section when clicking on the anchor, also prevent the default behaviour of the anchor
anchors.forEach(function(anchor) {
    anchor.addEventListener('click',function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
});