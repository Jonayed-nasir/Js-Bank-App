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

    }