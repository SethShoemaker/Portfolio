import './index.scss';

// Mobile menu functionality
    const mobileMenu = document.getElementById('mobile-links');
    const mobileLinks = document.getElementsByClassName('mobile-link');
    const mobileMenuButton = document.getElementById('menu-button');
    const mobileMenuButtonOpen = document.getElementById('mobile-open');
    const mobileMenuButtonClose = document.getElementById('mobile-close');

    for (let i = 0; i < mobileLinks.length; i++) {
        const link = mobileLinks[i];

        link.addEventListener('click', ()=>{
            toggleMobileMenu();
        })
    }

    function toggleMobileMenu(){
        const isExpanded = mobileMenu.style.display === 'flex';

        if(isExpanded){
            // hide mobile menu
            mobileMenu.style.display = 'none';
            // show open close close
            mobileMenuButtonOpen.style.display = 'block';
            mobileMenuButtonClose.style.display = 'none';
            // set aria attributes to closed
            mobileMenu.setAttribute('aria-expanded', 'false');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        }else{
            // display mobile menu
            mobileMenu.style.display = 'flex';
            // hide open show close
            mobileMenuButtonOpen.style.display = 'none';
            mobileMenuButtonClose.style.display = 'block';
            // set aria attributes to open
            mobileMenu.setAttribute('aria-expanded', 'true');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
        }
    }

    mobileMenuButton.addEventListener('click', ()=>{
        toggleMobileMenu();
    });

// Content link functionality
    const contentLinks = document.getElementsByClassName('content-links');
    
    for (let i = 0; i < contentLinks.length; i++) {
        const link = contentLinks[i];
        link.addEventListener('click', ()=>{
            goToSection(link);
        });
    }

    function goToSection(link){
        const sectionID = link.getAttribute('href');
        const section = document.getElementById(sectionID);
        const scrollTop = (section.offsetTop) - 130;

        window.scroll({
            top: scrollTop,
            behavior: 'smooth'
        });
    }