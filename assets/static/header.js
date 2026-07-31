const hamMenu = document.querySelector('.ham-menu');

const hamMenuContents = document.querySelector('.ham-menu-contents');

const header = document.querySelector('.nav-burger');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hamMenuContents.classList.toggle('active');
})

const updateHeaderVars = () => {
    document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
    
    const rightGap = window.innerWidth - header.getBoundingClientRect().right;
    document.documentElement.style.setProperty('--header-right-gap', rightGap + 'px');
};

updateHeaderVars();

new ResizeObserver(updateHeaderVars).observe(header);

window.addEventListener('resize', updateHeaderVars);