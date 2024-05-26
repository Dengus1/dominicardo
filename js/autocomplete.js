let availableKeywords = [
    'DOMINEWS',
    'WIKI-TEMPLATE',
];

const resultsBox = document.querySelector(".wynik-box");
const inputBox = document.getElementById("input-box");

inputBox.addEventListener('input', function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
});

function display(result) {
    if (result.length === 0) {
        resultsBox.innerHTML = "";
        return;
    }

    const content = result.map((list) => {
        let href = '';
        if (list === 'DOMINEWS') {
            href = 'wiki-dominews.html';
        } else if (list === 'WIKI-TEMPLATE') {
            href = 'wiki-template.html';
        }
        return `<li><a href="${href}">${list}</a></li>`;
    }).join('');

    resultsBox.innerHTML = `<ul>${content}</ul>`;
}