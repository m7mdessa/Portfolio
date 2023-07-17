
  "use strict";

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }



function changeImage(cardIndex) { 
let imageSources = [
    {
        original: 'folders/img/portfolio/p1.png',
        new: 'folders/img/check.jpg'
    },
    {
        original: 'folders/img/portfolio/p2.png',
        new: 'folders/img/check.jpg'
    },
    {
        original: 'folders/img/portfolio/p3.png',
        new: 'folders/img/check.jpg'
    },
    {
        original: 'folders/img/portfolio/p4.png',
        new: 'folders/img/check.jpg'
    }
];
    let image = document.getElementById('image' + (cardIndex + 1));
    let sourceData = imageSources[cardIndex];

    if (image.src.includes(sourceData.original)) {

        image.src = sourceData.new;

    }
    else {
        image.src = sourceData.original;
    }
}
    


  new Swiper('.about-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
     
  });
  

function printSection(sectionId) {
    let section = document.getElementById(sectionId).cloneNode(true);

    let printWindow = window.open('', '_blank');

    printWindow.document.open();
    printWindow.document.write('<html><body></body></html>');
    printWindow.document.body.appendChild(section);
    printWindow.document.close();

    printWindow.print();

    printWindow.close();
}

function handleChange(input) {
    input.style.color = input.value ? 'black' : 'red';
}

function handleSubmit(event) {
    event.preventDefault();
    let form = event.target;
    let isValid = true;

    let requiredInputs = form.querySelectorAll('input:required');
    requiredInputs.forEach(function (input) {
        if (!input.value) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    let emailInput = form.querySelector('#email');
    let emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailInput.style.borderColor = 'red';
        isValid = false;
    } else {
        emailInput.style.borderColor = ''; 
    }

    let nameInput = form.querySelector('#name');
    let namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(nameInput.value)) {
        nameInput.style.borderColor = 'red';
        isValid = false;
    } else {
        nameInput.style.borderColor = ''; 
    }

    if (isValid) {
        let successMessage = document.createElement('p');
        successMessage.innerHTML = 'Message sent successfully!';
        form.appendChild(successMessage);

        form.reset();
    }
}


let backtotop = select('.back-to-top')
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}