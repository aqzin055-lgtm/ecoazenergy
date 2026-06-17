document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  const submitBtn = contactForm.querySelector('.submit-btn');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone) => {
    // Simple check for minimum digits, allowing + spaces and dashes
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 9;
  };

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    contactForm.querySelectorAll('.input-field').forEach(el => {
      el.classList.remove('error');
    });

    // Validate Name
    const nameInput = document.getElementById('cf-name');
    if (nameInput && nameInput.value.trim().length < 2) {
      nameInput.classList.add('error');
      isValid = false;
    }

    // Validate Email
    const emailInput = document.getElementById('cf-email');
    if (emailInput && !validateEmail(emailInput.value)) {
      emailInput.classList.add('error');
      isValid = false;
    }

    // Validate Phone
    const phoneInput = document.getElementById('cf-phone');
    if (phoneInput && !validatePhone(phoneInput.value)) {
      phoneInput.classList.add('error');
      isValid = false;
    }

    if (isValid) {
      // Simulate form submission
      submitBtn.classList.add('loading');
      
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('success');
        submitBtn.innerHTML = '✓ Göndərildi';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.classList.remove('success');
          submitBtn.innerHTML = 'Göndər';
        }, 3000);
        
      }, 1500);
    }
  });

  // Remove error class on input
  contactForm.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('input', () => {
      if(input.classList.contains('error')) {
        input.classList.remove('error');
      }
    });
  });
});
