// 1. THE CONNECTIONS
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');



const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
);

let transactions =
    localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// 3. THE BUILDER: Add transaction to DOM list
function addTransactionDOM(transaction) {
    // Get sign (Is it + or -?)
    const sign = transaction.amount < 0 ? '-' : '+';

    // Create the list item (li)
    const item = document.createElement('li');

    // Add class based on value (If < 0, add 'minus' class. Else add 'plus')
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    // Create the HTML inside the li
    item.innerHTML = `
    ${transaction.text} 
    <span>${sign}${Math.abs(transaction.amount)}</span> 
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>`;

    // Add it to the list in the HTML
    list.appendChild(item);
}

// 4. THE START BUTTON
function init() {
    list.innerHTML = ''; // Clear any existing list
    transactions.forEach(addTransactionDOM); // Run the builder for every item in our array
}
// 5. UPDATE THE BALANCE, INCOME AND EXPENSE
function updateValues() {
    // 1. Get all amounts from the transactions array
    const amounts = transactions.map(transaction => transaction.amount);

    // 2. Calculate Total Balance (Add them all together)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    // 3. Calculate Income (Only positive numbers)
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    // 4. Calculate Expense (Only negative numbers)
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    // 5. Update the HTML
    balance.innerText = `$${total}`;
    money_plus.innerText = `+$${income}`;
    money_minus.innerText = `-$${expense}`;
}
function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues(); // <--- Add this line!
}
// 6. ADD NEW TRANSACTION
function addTransaction(e) {
    e.preventDefault(); // Stop the page from reloading

    // Check if inputs are empty
    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add a text and amount');
    } else {
        // Create the new transaction object
        const transaction = {
            id: generateID(), // We need a random ID (we'll make this function next)
            text: text.value,
            amount: +amount.value // The '+' turns the string "-15" into the number -15
        };

        // Add to our array
        transactions.push(transaction);

        // Update the UI
        addTransactionDOM(transaction);
        updateValues();

        updateLocalStorage();

        // Clear the form inputs
        text.value = '';
        amount.value = '';
    }
}

// 7. GENERATE RANDOM ID
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

form.addEventListener('submit', addTransaction);
// 8. REMOVE TRANSACTION BY ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);

    updateLocalStorage(); // We will write this next!
    init();
}

// 9. UPDATE LOCAL STORAGE INTERROW
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}
init();