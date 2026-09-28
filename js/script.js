/* ============================================================
   MOBILE MENU
   ============================================================ */
(function(){
  const btn = document.getElementById('hamburgerBtn');
  const panel = document.getElementById('mobilePanel');

  btn.addEventListener('click', function(){
    const isOpen = panel.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  panel.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      panel.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open navigation menu');
    });
  });
})();

/* ============================================================
   BIBLE VERSE GENERATOR
   ============================================================ */
(function(){
  const verses = [
    { text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God.", ref: "Isaiah 41:10, KJV" },
    { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1, KJV" },
    { text: "I can do all things through Christ which strengtheneth me.", ref: "Philippians 4:13, KJV" },
    { text: "Trust in the Lord with all thine heart; and lean not unto thine own understanding.", ref: "Proverbs 3:5, KJV" },
    { text: "Be strong and of a good courage, fear not, nor be afraid of them: for the Lord thy God, he it is that doth go with thee.", ref: "Deuteronomy 31:6, KJV" },
    { text: "Cast thy burden upon the Lord, and he shall sustain thee.", ref: "Psalm 55:22, KJV" }
  ];

  const verseText = document.getElementById('verseText');
  const verseRef = document.getElementById('verseRef');
  const verseBtn = document.getElementById('verseBtn');
  let lastIndex = 0;

  verseBtn.addEventListener('click', function(){
    let index;
    do{
      index = Math.floor(Math.random() * verses.length);
    } while(index === lastIndex && verses.length > 1);
    lastIndex = index;

    verseText.classList.add('verse-fade');
    verseRef.classList.add('verse-fade');

    setTimeout(function(){
      verseText.textContent = '"' + verses[index].text + '"';
      verseRef.textContent = verses[index].ref;
      verseText.classList.remove('verse-fade');
      verseRef.classList.remove('verse-fade');
    }, 220);
  });
})();

/* ============================================================
   PRAYER REQUEST FORM
   Opens the form, validates each field with an inline message,
   then submits to Formspree without reloading the page.
   ============================================================ */
(function(){
  const openBtn = document.getElementById('openPrayerFormBtn');
  const heroBtn = document.getElementById('heroPrayerBtn');
  const panel = document.getElementById('prayerPanel');
  const form = document.getElementById('prayerForm');
  const success = document.getElementById('prayerSuccess');

  const nameInput = document.getElementById('pName');
  const contactInput = document.getElementById('pContact');
  const requestInput = document.getElementById('pRequest');

  const nameError = document.getElementById('pNameError');
  const contactError = document.getElementById('pContactError');
  const requestError = document.getElementById('pRequestError');

  function openPanel(){
    panel.style.display = 'block';
    form.style.display = 'block';
    success.classList.remove('show');
  }

  openBtn.addEventListener('click', openPanel);
  heroBtn.addEventListener('click', function(){
    setTimeout(openPanel, 350);
  });

  /* Clears a field's error state once the user starts fixing it */
  function clearFieldError(input, errorEl){
    input.classList.remove('invalid');
    errorEl.classList.remove('show');
    errorEl.textContent = '';
  }

  function showFieldError(input, errorEl, message){
    input.classList.add('invalid');
    errorEl.textContent = message;
    errorEl.classList.add('show');
  }

  [nameInput, contactInput, requestInput].forEach(function(input){
    input.addEventListener('input', function(){
      if(input.value.trim() !== ''){
        const errorEl = input.id === 'pName' ? nameError
          : input.id === 'pContact' ? contactError
          : requestError;
        clearFieldError(input, errorEl);
      }
    });
  });

  function validateForm(){
    let isValid = true;

    if(nameInput.value.trim() === ''){
      showFieldError(nameInput, nameError, 'Please enter your name.');
      isValid = false;
    } else {
      clearFieldError(nameInput, nameError);
    }

    if(contactInput.value.trim() === ''){
      showFieldError(contactInput, contactError, 'Please enter an email or phone number.');
      isValid = false;
    } else {
      clearFieldError(contactInput, contactError);
    }

    if(requestInput.value.trim() === ''){
      showFieldError(requestInput, requestError, 'Please share your prayer request.');
      isValid = false;
    } else {
      clearFieldError(requestInput, requestError);
    }

    return isValid;
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();

    if(!validateForm()){
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(function(response){
      if(response.ok){
        form.style.display = 'none';
        success.classList.add('show');
        form.reset();
      } else {
        alert('Something went wrong sending your request. Please try again.');
      }
    })
    .catch(function(){
      alert('Something went wrong. Please check your connection and try again.');
    })
    .finally(function(){
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Prayer Request';
    });
  });
})();