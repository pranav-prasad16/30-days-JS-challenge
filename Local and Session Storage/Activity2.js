function saveStringSessionStorage() {
  document
    .getElementById('session-btn1')
    .addEventListener('click', saveToSessionStorage);
  document
    .getElementById('session-btn2')
    .addEventListener('click', retrieveFromSessionStorage);

  function saveToSessionStorage() {
    const message = document.getElementById('session-text-area').value;
    sessionStorage.setItem('session-message', message);
    console.log('Message String saved to local storage');
  }

  function retrieveFromSessionStorage() {
    const retrievedValue = sessionStorage.getItem('session-message');
    if (retrievedValue)
      document.getElementById(
        'session-local-storage-message-string'
      ).textContent = retrievedValue;
    else
      document.getElementById(
        'session-local-storage-message-string'
      ).textContent = `Nothing present in the local Storage`;
  }
}

saveStringSessionStorage();

function saveObjectSessionStorage() {
  document
    .getElementById('session-btn-obj-1')
    .addEventListener('click', saveToSessionStorage);
  document
    .getElementById('session-btn-obj-2')
    .addEventListener('click', retrieveFromSessionStorage);

  function saveToSessionStorage() {
    const obj = { name: 'Krish', rollNo: 21, address: 'Mathura' };
    sessionStorage.setItem('session-obj', JSON.stringify(obj));
    console.log('Message Object saved to local storage');
  }

  function retrieveFromSessionStorage() {
    const retrievedValue = sessionStorage.getItem('session-obj');
    if (retrievedValue)
      document.getElementById(
        'session-local-storage-message-object'
      ).textContent = retrievedValue;
    else
      document.getElementById(
        'session-local-storage-message-object'
      ).textContent = `No object stored in the local storage`;
  }
}

saveObjectSessionStorage();

function saveFormDataSessionStorage() {
  document
    .getElementById('session-btn-form-1')
    .addEventListener('click', saveToSessionStorage);
  document
    .getElementById('session-btn-form-2')
    .addEventListener('click', retrieveFromSessionStorage);

  function saveToSessionStorage(event) {
    event.preventDefault();
    const form = document.getElementById('session-my-form');
    const formData = new FormData(form);
    const name = formData.get('session-name');
    const email = formData.get('session-email');

    sessionStorage.setItem('session-formData', JSON.stringify({ name, email }));
    console.log('Form Data Object saved to local storage');
  }

  function retrieveFromSessionStorage() {
    const retrievedValue = sessionStorage.getItem('session-formData');
    if (retrievedValue)
      document.getElementById(
        'session-local-storage-message-form-data'
      ).textContent = retrievedValue;
    else
      document.getElementById(
        'session-local-storage-message-form-data'
      ).textContent = `No object stored in the local storage`;
  }
}

saveFormDataSessionStorage();

function removeFromSessionStorage() {
  document
    .getElementById('session-remove-from-local-storage')
    .addEventListener('click', removeItems);
  function removeItems() {
    let feedback1 = '',
      feedback2 = '',
      feedback3 = '';
    const value1 = sessionStorage.getItem('session-message'),
      value2 = sessionStorage.getItem('session-obj'),
      value3 = sessionStorage.getItem('session-formData');
    if (value1) {
      sessionStorage.removeItem('session-message');
      feedback1 = `Message removed from local storage`;
    } else feedback1 = `Message not found in local storage`;
    if (value2) {
      sessionStorage.removeItem('session-obj');
      feedback2 = `obj removed from local storage`;
    } else feedback2 = `obj not found in local storage`;
    if (value3) {
      sessionStorage.removeItem('session-formData');
      feedback3 = `formData removed from local storage`;
    } else feedback3 = `formData not found in local storage`;
    document.getElementById(
      'session-remove-from-local-storage-feedback'
    ).innerHTML = `${feedback1}<br>${feedback2}<br>${feedback3}`;
  }
}

removeFromSessionStorage();
