const swapButton = document.getElementById('swap');
const itemTitles = [...document.querySelectorAll('.item > .item-header > h3')];
const titles = itemTitles.map((i) => i.innerText);

swapButton.addEventListener('click', () => {
    for (const item of itemTitles) {
        item.innerText = titles[Math.floor(Math.random() * titles.length)];
        item.style.color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    }
});