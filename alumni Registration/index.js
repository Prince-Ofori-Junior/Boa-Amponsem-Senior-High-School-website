  const form = document.getElementById('alumniForm');
  const steps = Array.from(document.querySelectorAll('.form-step'));
  const stepLabels = Array.from(document.querySelectorAll('.steps div'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentStep = 0;

  function showStep(n) {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === n);
      stepLabels[i].classList.toggle('active', i === n);
    });
    prevBtn.disabled = n === 0;
    nextBtn.textContent = (n === steps.length - 1) ? 'Submit Registration' : 'Next';
  }

  nextBtn.addEventListener('click', () => {
    // Use built-in validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    } else {
      form.submit(); // Or replace with AJAX call
      alert('Registration submitted! Thank you.');
      form.reset();
      currentStep = 0;
      showStep(currentStep);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });

  showStep(currentStep);
