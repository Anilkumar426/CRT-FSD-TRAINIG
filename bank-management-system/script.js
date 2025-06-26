document.addEventListener('DOMContentLoaded', () => {
    const createAccountForm = document.getElementById('createAccountForm');
    const transactionForm = document.getElementById('transactionForm');
    const accountInfoSection = document.querySelector('.account-info');
    const transactionsSection = document.querySelector('.transactions');
    const displayAccountName = document.getElementById('displayAccountName');
    const displayBalance = document.getElementById('displayBalance');
    const transactionHistory = document.getElementById('transactionHistory');

    let account = null;

    createAccountForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('accountName').value.trim();
        const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);

        if (name && !isNaN(initialDeposit) && initialDeposit >= 0) {
            account = {
                name: name,
                balance: initialDeposit,
                transactions: [
                    { type: 'deposit', amount: initialDeposit, date: new Date() }
                ]
            };
            updateUI();
            createAccountForm.reset();
        } else {
            alert('Please enter valid account name and initial deposit.');
        }
    });

    transactionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!account) {
            alert('Please create an account first.');
            return;
        }
        const type = document.getElementById('transactionType').value;
        const amount = parseFloat(document.getElementById('transactionAmount').value);

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        if (type === 'withdraw' && amount > account.balance) {
            alert('Insufficient balance.');
            return;
        }

        if (type === 'deposit') {
            account.balance += amount;
        } else if (type === 'withdraw') {
            account.balance -= amount;
        }

        account.transactions.push({ type, amount, date: new Date() });
        updateUI();
        transactionForm.reset();
    });

    function updateUI() {
        displayAccountName.textContent = account.name;
        displayBalance.textContent = account.balance.toFixed(2);
        accountInfoSection.style.display = 'block';
        transactionsSection.style.display = 'block';

        transactionHistory.innerHTML = '';
        account.transactions.forEach(tx => {
            const li = document.createElement('li');
            li.textContent = `${tx.date.toLocaleString()}: ${tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} $${tx.amount.toFixed(2)}`;
            li.className = tx.type;
            transactionHistory.appendChild(li);
        });
    }
});
