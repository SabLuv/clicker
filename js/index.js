let countNode = document.querySelector(`#count`);
let clickNode = document.querySelector(`#click`);
let decorNode = document.querySelector(`#decor`);


let count = 0;

clickNode.addEventListener(`click`, function() {
    count++;

    countNode.innerHTML = count;

    if (count == 100) {
        decorNode.style.display = `block`;
        clickNode.style.marginTop = `0px`;
    }
})
