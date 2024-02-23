//your JS code here. If required.
const form = document.querySelector('form');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

async function p2(text , delay){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(text);
        } , delay*1000);
    });
}

btn.addEventListener('click' , async () => {
    let text = document.getElementById('text').value;
    let delay = Number(document.getElementById('delay').value);

    let result = await p2(text , delay);
    output.innerText = result;
});

 