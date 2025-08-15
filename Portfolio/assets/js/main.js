//active page on navigation bar
const navLinks = document.querySelectorAll('.nav-link');
document.addEventListener('DOMContentLoaded', function() {
    
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 200; 
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav);
    
    updateActiveNav();
});

//typing animation on hero section
document.addEventListener('DOMContentLoaded', function() {

    const heroTitle = document.querySelector('.hero-text h2');

    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        const typingSpeed = 100;
        let charIndex = 0;

        function typeText() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText[charIndex];
                charIndex++;
                setTimeout(typeText, typingSpeed);
            }
        }
        
        setTimeout(typeText, 500);
    }

});

//animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    
    const sections = document.querySelectorAll('.about, .skills, .projects, .contact');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s ease';
    });
    
    function isInView(element) {
        const position = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        return position.top < windowHeight * 0.8;
    }
    
    function animateOnScroll() {
        sections.forEach(section => {
            if (isInView(section)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    
    animateOnScroll();
});


//skill tag animations
document.addEventListener('DOMContentLoaded', function() {

    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.backgroundColor = '#333';
            this.style.color = 'white';
            this.style.transition = 'all 0.3s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.backgroundColor = 'white';
            this.style.color = '#333';
        });
    });

});

//download resume
document.addEventListener('DOMContentLoaded', function() {
    
    const downloadBtn = document.querySelector('.download-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            
            const resumeUrl = 'assets/images/icons/background.jpg';
            
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'Example.jpg';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
        });
    }
    
});