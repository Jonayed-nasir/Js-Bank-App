  let balance = 0;
    let action = "";

    function showForm(type) {
      action = type;
      document.getElementById('formSection').classList.remove('hidden');
    }

    function submitAction() {
      const amount = parseFloat(document.getElementById('amountInput').value);
      const history = document.getElementById('history');
      const balanceDisplay = document.getElementById('balance');

      if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
      }

      let message = '';
      if (action === 'add') {
        balance += amount;
        message = `✅ Added ৳${amount}`;
      } else if (action === 'send') {
        if (amount > balance) {
          alert("❌ Not enough balance.");
          return;
        }
        balance -= amount;
        message = `📤 Sent ৳${amount}`;
      } else if (action === 'withdraw') {
        if (amount > balance) {
          alert("❌ Not enough balance.");
          return;
        }
        balance -= amount;
        message = `📥 Withdrawn ৳${amount}`;
      }

      balanceDisplay.innerText = balance;
      const li = document.createElement('li');
      li.innerText = message;
      li.className = "bg-white p-2 rounded shadow text-gray-700";
      history.prepend(li);

      document.getElementById('amountInput').value = '';
      document.getElementById('formSection').classList.add('hidden');
      
    }