let count = 0;

const countHeader = document.getElementById("count");
countHeader.innerText = count;

const countAddBtn = document.getElementById("add");
const countMinBtn = document.getElementById("minus");

countAddBtn.addEventListener("click", () => {
    count++;
    countHeader.innerText = count;
});

countMinBtn.addEventListener("click", () => {
    count--;
    countHeader.innerText = count;
});
