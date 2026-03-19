let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click', () => {
    let item = document.createElement('li');
    item.innerText = inp.value;

    let dltBtn = document.createElement('button');
    dltBtn.innerText = 'Delete';
    dltBtn.classList.add('delete');

    item.appendChild(dltBtn);
    ul.appendChild(item);
    inp.value = '';
})

ul.addEventListener('click', (e) => {

    if (e.target.nodeName == 'BUTTON') {
        let listItem = e.target.parentElement;
        listItem.remove();
    }
})