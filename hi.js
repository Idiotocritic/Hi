const textParagraph = document.getElementById('text');

textParagraph.textContent = Math.random() * 1000;

const btnElem = document.getElementById('btn1');
    btnElem.addEventListener('click', function() {
        textParagraph.textContent = Math.random() * 1000;
    });
    btnElem.addEventListener('load', function() {
        textParagraph.style.color = 'red';
    })

    const colorPick = document.getElementById('colorPicker');



    colorPick.addEventListener('mouseover' , function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        colorPick.style.color = randomColor;
        document.body.style.backgroundColor = colorPick.value;
        document.getElementById('text').style.backgroundColor = colorPick.value;
    })
