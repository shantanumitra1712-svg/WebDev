document.addEventListener('DOMContentLoaded', () => {

    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalAmountDisplay = document.getElementById("total-amount");

    let expenses = JSON.parse(localStorage.getItem('expenses')) || []

    let totalAmount = calculateTotal()

    renderExpenses();

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const name = expenseNameInput.value.trim();

        // console.log(expenseAmountInput.value.trim());
        // console.log(typeof expenseAmountInput.value.trim()); it is a string though the form type was number

        const amount = parseFloat(expenseAmountInput.value.trim());

        if (name !== "" && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name: name,
                amount, // it means amount : amount
            };
            expenses.push(newExpense);
            saveExpensesToLocal(); // save the aray expenses to the local storage

            renderExpenses(); //to display the expenses

            updateTotal();

            // clear input
            expenseNameInput.value = "";
            expenseAmountInput.value = "";
        }
    })

    function renderExpenses() {
        expenseList.innerHTML = "";
        expenses.forEach(expense => {
            const li = document.createElement('li');

            li.innerHTML = `
                ${expense.name} - $${expense.amount}
                <button data-id= "${expense.id}">
                    Delete
                </button>
            `;

            expenseList.appendChild('li');
        })
    }

    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0)
    }

    function updateTotal() {
        totalAmount = calculateTotal()
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    function saveExpensesToLocal() {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

})