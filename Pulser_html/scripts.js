// Top bar scrolling effect
window.addEventListener('scroll', () => {
    const topBar = document.querySelector('.top-bar');
    if (window.scrollY > 10) {
        topBar.classList.add('scrolled');
    } else {
        topBar.classList.remove('scrolled');
    }
});

// Q&A section toggle functionality
document.querySelectorAll('.qna-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        const arrow = title.querySelector('.arrow');

        content.classList.toggle('open');
        title.classList.toggle('active');
    });
});

// Navbar show/hide effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('show');
        navbar.classList.remove('hide');
    } else {
        navbar.classList.add('hide');
        navbar.classList.remove('show');
    }
});

// Smooth scroll for navbar buttons
document.querySelectorAll('.navbar button').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector(`.${button.dataset.target}`);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });

            // Highlight the active button
            document.querySelectorAll('.navbar button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        }
    });
});

// Show and handle join input functionality
const showInputButton = document.getElementById('show-input-btn');
if (showInputButton) {
    showInputButton.addEventListener('click', () => {
        const inputWrapper = document.getElementById('input-wrapper');
        inputWrapper.classList.toggle('hidden');
    });
} else {
    console.error('Show Input Button not found!');
}

// Join button functionality
const joinButton = document.getElementById('join-btn');
if (joinButton) {
    joinButton.addEventListener('click', () => {
        const userInput = document.getElementById('user-input').value;
        if (userInput.trim() !== '') {

        } else {
            alert('Please enter a valid email acount.');
        }
    });
} else {
    console.error('Join Button not found!');
}

// CTA buttons action
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        const ctaSection = document.querySelector('.cta-section');
        if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: 'smooth' });
            const inputWrapper = document.getElementById('input-wrapper');
            if (inputWrapper) {
                inputWrapper.classList.remove('hidden');
                document.getElementById('user-input').focus();
            } else {
                console.error('Input wrapper not found');
            }
        } else {
            console.error('CTA Section not found');
        }
    });
});

// Nevbar following hightlight
const sections = document.querySelectorAll('section'); // get all sections
const navButtons = document.querySelectorAll('.navbar button'); // get all nev buttons

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
            currentSection = section.className.split(' ')[0]; // get class name
        }
    });

    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.target === currentSection) {
            button.classList.add('active');
        }
    });
});
