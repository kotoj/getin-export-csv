var csvNewLine = "\r\n";
var csvSeparator = ",";
var csv = "";
//lista elementow z widoku transakcji
var transactionItemsSelector = `//ul[contains(@class,'transfer_list')]/li`;

var transactionItems = $x(transactionItemsSelector);

transactionItems.forEach(function(transaction) {
    //var row = "";
    console.log(transaction);
    const amount = transaction.getAttribute('data-amount');
    const dateAndType = $x(`.//*[@class='main-title']/dd`, transaction)[0].innerText;
    const title = $x(`.//*[@class='main-title']/dt`, transaction)[0].innerText;
    const transactionDate = dateAndType.split(" - ")[0];
    const transactionType = dateAndType.split(" - ")[1];
    const transferCurrency = transaction.getAttribute('data-currency');
    const transferInOrOut = transaction.getAttribute('data-transfertype');
	const balance = $x(`.//span[@class='balance']`, transaction)[0].innerText.replace('SALDO PO OPERACJI: ', '');
	const balanceAmount = balance.slice(0,-4); // todo źle robicie...
	const balanceCurrency = balance.slice(-3);
	console.log(transferInOrOut);
	console.log(amount);
	console.log(transferCurrency);
	console.log(balanceAmount);
	console.log(balanceCurrency);
	console.log(transactionType);
	console.log(transactionDate);
	console.log(title);
// 	row+=transactionDate
// 	row.concat(csvSeparator, amount);

    var row = [transactionDate, title,transferInOrOut, amount, transferCurrency, balanceAmount, balanceCurrency, transactionType].join(csvSeparator);
	console.log("row: " + row);

	csv+=row;
	csv+=csvNewLine;
});

console.log(csv);

