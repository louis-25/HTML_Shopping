function loadItems() {
    return fetch('../data/data.json')
    .then(response => response.json()) //response데이터가 성곡적으로 받아지면 json으로 변환
    .then(json => json.items);
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
    // console.log(container.innerHTML);
}

function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key; //클릭한 버튼의 key
    const value = dataset.value; // 클릭한 버튼의 value    

    if(key == null || value == null) { //key와 value값이 null이면 실행X
        return;
    }

    // updateItems(items, key, value);
    displayItems(items.filter(item => item[key] === value));
}

// function updateItems(items, key, value) {
//     const html_item = document.querySelector('.item');
//     console.log(html_item);    
//     items.forEach(item => {        
//         console.log("item " + item[key]);
//         console.log("value "+ value);            
//         if (item[key] === value) {
//             html_item.classList.remove('invisible'); //invisible옵션 제거
//         }else {
//             html_item.classList.add('invisible');
//         }
//     })    
// }

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items)); //로고를 클릭하면 전체 아이템 보이기
    buttons.addEventListener('click', event => onButtonClick(event, items)); //각 버튼 클릭시 타입별로 보여주기
}

// main
loadItems()
    .then(items => {        
        console.log(items);
        displayItems(items);
        setEventListeners(items);        
    })
    .catch(console.log);