const col_btn = document.querySelector('button');

col_btn.addEventListener('click', (e) =>{
    const color = Math.floor(Math.random()*16777215).toString(16);

    document.querySelector('body').style.background = `#${color}`;
    document.querySelector('#color_id').textContent = `#${color}`;
})