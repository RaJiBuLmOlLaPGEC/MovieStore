// Store the wallet amount to your local storage with key "amount"
// console.log(wallet_balance);
document.querySelector("#wallet_amount>h1").innerText=JSON.parse(localStorage.getItem("amount")||0);

function addToWallet(){
    let newAmount=Number(document.querySelector("#amount").value);
    var wallet_balance=Number(JSON.parse(localStorage.getItem("amount"))||+0);
    newAmount=wallet_balance+newAmount;
    localStorage.setItem("amount",JSON.stringify(newAmount));
    document.querySelector("#wallet_amount>h1").innerText=newAmount;
}

// function addToWallet(){
//     localStorage.setItem("balence",JSON.stringify(document.querySelector("#amount").value));
// }