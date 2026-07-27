const sidebar = document.querySelector(".sidebar");

const backdrop = document.createElement('div');
backdrop.className = 'sidebar-backdrop';
document.body.appendChild(backdrop);

function showsidebar() {
    sidebar.classList.add('open');
    backdrop.classList.add('show');
    document.body.classList.add('no-scroll');
}

function closesidebar() {
    sidebar.classList.remove('open');
    backdrop.classList.remove('show');
    document.body.classList.remove('no-scroll');
}

backdrop.addEventListener('click', closesidebar);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closesidebar();
});

sidebar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closesidebar);
});

const section = document.querySelectorAll('section');
const navlist = document.querySelectorAll(".a");

window.onscroll = () => {
    section.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 170;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlist.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector('.a[href*="' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    })
}