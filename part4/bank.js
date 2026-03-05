let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];

function deposit(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}

function withdraw(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
        if(customer.balance >= amount){
            return {
                ...customer,
                balance: customer.balance - amount,
                transactions: [
                    ...customer.transactions,
                    {
                        type: "debit",
                        amount: amount,
                        date: Date.now(),
                    },
                ],
            };
        }
        else{
            console.log("Insufficient Funds!")
            return customer;
        }
 
    } else {
      return customer;
    }
  });
}


// function checkBalance(id){

//     for(let i=0; i<customers.length; i++){
//         if(customers[i].id==id){
//             console.log(customers[i].balance)
//         }
//     }
// }
function checkBalance(id){
  const customer = customers.find((customer)=>customer.id==id)
  console.log(customer.balance)
}

// function showTransactions(id){
//   customers = customers.map((customer) => {
//         if (customer.id === id){
//             console.table(customer.transactions)
//         }
//   }
//   )
// }
function showTransactions(id){
  const customer = customers.find((customer)=>customer.id==id)
  console.table(customer.transactions)
}

export {deposit,withdraw,checkBalance,showTransactions}