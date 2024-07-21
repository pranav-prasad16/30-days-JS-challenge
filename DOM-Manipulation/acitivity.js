const emptyPara = document.getElementById('empty-para');
emptyPara.textContent = `This paragraph was empty before and is now set via javascript`;

const editPara = document.querySelector('.edit-para');
editPara.style.backgroundColor = 'Yellow';

document.getElementById('myH1').style.backgroundColor = 'red';

const newDiv = document.createElement('div');
newDiv.textContent = `This is new div created in js`;
document.body.append(newDiv);

const listItems = document.getElementsByClassName('list-items');
const lastListItem = listItems[listItems.length - 1];
const secondLastItem = listItems[listItems.length - 2];
const newList = document.createElement('li');
newList.textContent = `List 5, added to the end of list js`;
lastListItem.append(newList);
secondLastItem.classList.remove('list-items');

const para = document.querySelector('#para');
const removePara = document.getElementById('remove-para');
removePara.addEventListener('click', () => para.remove());

const olListItems = document.getElementsByClassName('ol-list-items');
const lastOlListItem = olListItems[olListItems.length - 1];
lastOlListItem.remove();

const imageTag = document.querySelector('.image-tag');
imageTag.src =
  'https://imgs.search.brave.com/YRh2gih9XsJIn-MyDnbSS7UFaeFsDsf03rkvZiFoWMI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RvY2twaG90/b3MuY29tL21hcmtl/dGluZy9haS1wcm9t/by1ib3gvYWktcHJv/bW8tYm94LWJnLnBu/Zz93aWR0aD03OTAm/cXVhbGl0eT03NQ';

imageTag;
