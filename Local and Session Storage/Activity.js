function storeAndRetrieveAndRemoveFromSessionAndLocal() {
  document
    .getElementById('session-local-store')
    .addEventListener('click', storeToSessionAndLocal);
  document
    .getElementById('session-local-retrieve')
    .addEventListener('click', retrieveFromSessionAndLocal);
  document
    .getElementById('session-local-remove')
    .addEventListener('click', removeFromSessionAndLocal);
  function storeToSessionAndLocal() {
    const key = document.getElementById('session-local-key').value;
    const value = document.getElementById('session-local-value').value;
    sessionStorage.setItem(key, value);
    localStorage.setItem(key, value);
  }
  function retrieveFromSessionAndLocal() {
    const key = document.getElementById('session-local-key').value;
    const sessionKey = sessionStorage.getItem(key);
    const localKey = localStorage.getItem(key);
    let value1 = '',
      value2 = '';
    if (sessionKey) {
      value1 = sessionKey;
    } else value1 = `value not found in session storage`;
    if (localKey) {
      value2 = localKey;
    } else value2 = `value not found in local storage`;
    document.getElementById(
      'session-local-display'
    ).innerHTML = `${value1}<br>${value2}`;
  }
  function removeFromSessionAndLocal() {
    const key = document.getElementById('session-local-key').value;
    const sessionValue = sessionStorage.getItem(key);
    const localValue = localStorage.getItem(key);
    let feedback1 = '',
      feedback2 = '';
    if (sessionValue) {
      sessionStorage.removeItem(key);
      feedback1 = `${key} removed from the session storage`;
    } else feedback1 = `${key} not found in session storage`;
    if (localValue) {
      localStorage.removeItem(key);
      feedback2 = `${key} removed from the local storage`;
    } else feedback2 = `${key} not found in local storage`;
    document.getElementById(
      'session-local-remove-feedback'
    ).innerHTML = `${feedback1}<br>${feedback2}`;
  }
}

storeAndRetrieveAndRemoveFromSessionAndLocal();
