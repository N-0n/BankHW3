let balance=Number(document.getElementById('balance').innerText);


function credit(){
    let amount = parseFloat(document.getElementById('amount').value);
    if(amount>0){
    balance = balance + amount;
    document.getElementById('balance').innerText=balance;
    document.getElementById('amount').value = '';
    }else if(amount<=0){
        alert('Amount must be greater than zero!')
    }
}

function debit(){
    let amount = parseFloat(document.getElementById('amount').value);
    if(amount>0){
    if (amount <= balance) {
        balance= balance - amount;
        document.getElementById('balance').innerText=balance;
        document.getElementById('amount').value = '';

    } else if(amount>balance) {
        alert('Amount cannot be withdrawn, Insufficient balance!')
    } 
     }else if(amount<=0){
        alert('Amount must be greater than zero!')
    }
}
