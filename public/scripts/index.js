// Controller

/* eslint-disable no-console */
const btnTheme = document.getElementById('btnTheme');
const btnAddNote = document.getElementById('btnAddNote');
const btnShowFinished = document.getElementById('btnShowFinished');
const btnSort = document.getElementById('btnSort');

btnTheme.addEventListener('click', () => {
  console.log(btnTheme.options[btnTheme.selectedIndex].value);
  document.body.classList.toggle(btnTheme.options[btnTheme.selectedIndex].value);
  // document.body.classList.toggle('dark-theme');
});

btnAddNote.addEventListener('click', () => {
  console.log('addClicked');
});

btnShowFinished.addEventListener('click', () => {
  console.log('ShowFinishedClicked');
});

btnSort.addEventListener('click', () => {
  console.log('sort', btnSort.value);
});
