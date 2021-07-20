
let element = document.getElementById('app');

let r = Math.floor(Math.random() * (10));
let c = Math.floor(Math.random() * (20));

for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 20; column++) {
        const addButton = document.createElement('button');
        if (row == r && column == c) {
            addButton.classList.add('yami-button');
            addButton.type = 'button';
            addButton.textContent = '闇';
            addButton.addEventListener('click', ()=> {
                alert('素晴らしい†闇†だ');
            }, false);
        } else {
            addButton.classList.add('aida-button');
            addButton.type = 'button';
            addButton.textContent = '間';
        }
        element.appendChild(addButton);        
    }
    element.appendChild(document.createElement('br'));
}
