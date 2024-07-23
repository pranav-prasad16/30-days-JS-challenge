const para = document.querySelector('#para');
const removePara = document.getElementById('remove-para');
removePara.addEventListener('click', () => para.remove());

//task-1, 2

const changeImg = document.querySelector('.toogle-img');

const imageUrl1 =
  'https://imgs.search.brave.com/txtgf7S82QrVilKBi61jGvjEZ3B82MVVRPxgzoCKLrk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L29o/c1h0Z3k4SG1pOVB6/RE5wS2hKNU4tMzIw/LTgwLmpwZw';
const imagedUrl2 =
  'https://imgs.search.brave.com/YRh2gih9XsJIn-MyDnbSS7UFaeFsDsf03rkvZiFoWMI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RvY2twaG90/b3MuY29tL21hcmtl/dGluZy9haS1wcm9t/by1ib3gvYWktcHJv/bW8tYm94LWJnLnBu/Zz93aWR0aD03OTAm/cXVhbGl0eT03NQ';
const changeImgBtn = document.getElementById('toogle-img-btn');
changeImgBtn.addEventListener('click', () => {
  changeImg.src = changeImg.src.includes(
    'https://imgs.search.brave.com/txtgf7S82QrVilKBi61jGvjEZ3B82MVVRPxgzoCKLrk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L29o/c1h0Z3k4SG1pOVB6/RE5wS2hKNU4tMzIw/LTgwLmpwZw'
  )
    ? 'https://imgs.search.brave.com/YRh2gih9XsJIn-MyDnbSS7UFaeFsDsf03rkvZiFoWMI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RvY2twaG90/b3MuY29tL21hcmtl/dGluZy9haS1wcm9t/by1ib3gvYWktcHJv/bW8tYm94LWJnLnBu/Zz93aWR0aD03OTAm/cXVhbGl0eT03NQ'
    : 'https://imgs.search.brave.com/txtgf7S82QrVilKBi61jGvjEZ3B82MVVRPxgzoCKLrk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L29o/c1h0Z3k4SG1pOVB6/RE5wS2hKNU4tMzIw/LTgwLmpwZw';
});

const invisibleImg = document.querySelector('.invisible-img');
const invisibleImgBtn = document.getElementById('invisible-img-btn');
invisibleImgBtn.addEventListener('dblclick', () => {
  invisibleImg.style.visibility = invisibleImg.style.visibility.includes(
    'visible'
  )
    ? 'hidden'
    : 'visible';
});

//task-3, 4

const portfolioLink = document.getElementById('link');
portfolioLink.addEventListener('mouseover', () => {
  portfolioLink.style.backgroundColor = 'aqua';
  portfolioLink.style.textDecoration = 'none';
});
portfolioLink.addEventListener('mouseout', () => {
  portfolioLink.style.backgroundColor = 'white';
  portfolioLink.style.textDecoration = 'underline';
});

//task-5, 6

const labelField = document.getElementById('label-field');
const inputField = document.getElementById('input-field');

inputField.addEventListener('keydown', function (event) {
  console.log(`keydown is: ${event.key} (code: ${event.code})`);
});

const labelField2 = document.getElementById('label-field-2');
const inputField2 = document.getElementById('input-field-2');

inputField2.addEventListener('keyup', (event) =>
  console.log(`keyup is: ${event.key} (code: ${event.code})`)
);

//task-7, 8
const formData = document.getElementById('form-data');
const submitBtn = document.getElementById('submit-btn');
formData.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('form data submission prevented');
});

const dropDown = document.getElementById('dropdown');
const selectedValue = document.getElementById('selected-value');
dropDown.addEventListener('change', (event) => {
  const selected = event.target.value;
  selectedValue.textContent = `Selected value is: ${selected}`;
});
