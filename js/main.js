window.addEventListener('DOMContentLoaded', checkWidthAndRemove);

const checkWidthAndRemove = function (element) {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth;
    
        if (screenWidth < 600 && element) {
            element.parentNode.removeChild(element);
        }
}

const elements = document.querySelectorAll('.project-description')
elements.forEach((el) => checkWidthAndRemove(el))