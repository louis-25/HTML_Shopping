function loadItems() {
    return fetch('./data/data.json')
    .then(response => response.json()) //response데이터가 성곡적으로 받아지면 json으로 변환
    .then(json => json.items);
}

function displayItems(items) {
    const container =document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// main
loadItems()
    .then(items => {
        displayItems(items);
        console.log(items);
    })
    .catch(console.log);