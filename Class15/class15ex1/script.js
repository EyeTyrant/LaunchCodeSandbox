// Class 15 Exercise: Forms
  let form = document.querySelector('form');
  form.addEventListener('submit', function(e){
    let test = document.querySelector('input[name=testName]');
    let date = document.querySelector('input[name=testDate]');
    let boosters = document.querySelector('input[name=boosterCount]');
    if (test.value === '' || date.value === '' || boosters.value === '') {
      alert('All fields are required');
      e.preventDefault();
    }
  })










