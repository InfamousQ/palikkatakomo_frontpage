const hamMenu = document.querySelector('.ham-menu');

const hamMenuContents = document.querySelector('.ham-menu-contents');

const header = document.querySelector('.nav-burger');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hamMenuContents.classList.toggle('active');
})

document.addEventListener('click', (event) => {
    if (!hamMenuContents.classList.contains('active')) return;
    if (hamMenuContents.contains(event.target) || hamMenu.contains(event.target)) return;

    hamMenu.classList.remove('active');
    hamMenuContents.classList.remove('active');
})

const updateHeaderVars = () => {
    document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
    
    const rightGap = window.innerWidth - header.getBoundingClientRect().right;
    document.documentElement.style.setProperty('--header-right-gap', rightGap + 'px');
};

updateHeaderVars();

new ResizeObserver(updateHeaderVars).observe(header);

window.addEventListener('resize', updateHeaderVars);