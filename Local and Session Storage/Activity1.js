function saveStringLocalStorage() {
  document.getElementById('btn1').addEventListener('click', saveToLocalStorage);
  document
    .getElementById('btn2')
    .addEventListener('click', retrieveFromLocalStorage);

  function saveToLocalStorage() {
    const message = document.getElementById('text-area').value;
    localStorage.setItem('message', message);
    console.log('Message String saved to local storage');
  }

  function retrieveFromLocalStorage() {
    const retrievedValue = localStorage.getItem('message');
    if (retrievedValue)
      document.getElementById('local-storage-message-string').textContent =
        retrievedValue;
    else
      document.getElementById(
        'local-storage-message-string'
      ).textContent = `Nothing present in the local Storage`;
  }
}

saveStringLocalStorage();

function saveObjectLocalStorage() {
  document
    .getElementById('btn-obj-1')
    .addEventListener('click', saveToLocalStorage);
  document
    .getElementById('btn-obj-2')
    .addEventListener('click', retrieveFromLocalStorage);

  function saveToLocalStorage() {
    const obj = { name: 'Krish', rollNo: 21, address: 'Mathura' };
    localStorage.setItem('obj', JSON.stringify(obj));
    console.log('Message Object saved to local storage');
  }

  function retrieveFromLocalStorage() {
    const retrievedValue = localStorage.getItem('obj');
    if (retrievedValue)
      document.getElementById('local-storage-message-object').textContent =
        retrievedValue;
    else
      document.getElementById(
        'local-storage-message-object'
      ).textContent = `No object stored in the local storage`;
  }
}

saveObjectLocalStorage();

function saveFormDataLocalStorage() {
  document
    .getElementById('btn-form-1')
    .addEventListener('click', saveToLocalStorage);
  document
    .getElementById('btn-form-2')
    .addEventListener('click', retrieveFromLocalStorage);

  function saveToLocalStorage(event) {
    event.preventDefault();
    const form = document.getElementById('my-form');
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');

    localStorage.setItem('formData', JSON.stringify({ name, email }));
    console.log('Form Data Object saved to local storage');
  }

  function retrieveFromLocalStorage() {
    const retrievedValue = localStorage.getItem('formData');
    if (retrievedValue)
      document.getElementById('local-storage-message-form-data').textContent =
        retrievedValue;
    else
      document.getElementById(
        'local-storage-message-form-data'
      ).textContent = `No object stored in the local storage`;
  }
}

saveFormDataLocalStorage();

function removeFromLocalStorage() {
  document
    .getElementById('remove-from-local-storage')
    .addEventListener('click', removeItems);
  function removeItems() {
    let feedback1 = '',
      feedback2 = '',
      feedback3 = '';
    const value1 = localStorage.getItem('message'),
      value2 = localStorage.getItem('obj'),
      value3 = localStorage.getItem('formData');
    if (value1) {
      localStorage.removeItem('message');
      feedback1 = `Message removed from local storage`;
    } else feedback1 = `Message not found in local storage`;
    if (value2) {
      localStorage.removeItem('obj');
      feedback2 = `obj removed from local storage`;
    } else feedback2 = `obj not found in local storage`;
    if (value3) {
      localStorage.removeItem('formData');
      feedback3 = `formData removed from local storage`;
    } else feedback3 = `formData not found in local storage`;
    document.getElementById(
      'remove-from-local-storage-feedback'
    ).innerHTML = `${feedback1}<br>${feedback2}<br>${feedback3}`;
  }
}

removeFromLocalStorage();
