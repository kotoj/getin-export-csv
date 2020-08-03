var csvNewLine = "\r\n";
var csvSeparator = ",";
var closingChar = `"`;
var csv = "date,title,amount,transaction_currency,balance,balance_currency,transaction_type";
//lista elementow z widoku transakcji
var transactionItemsSelector = `//ul[contains(@class,'transfer_list')]/li`;

var transactionItems = $x(transactionItemsSelector);

transactionItems.forEach(function(transaction) {
	csv+=csvNewLine;
    const amountNoSign = transaction.getAttribute('data-amount');
    const transferInOrOut = transaction.getAttribute('data-transfertype');
	var sign;
	if (transferInOrOut === 'in') sign = 1;
	else if (transferInOrOut === 'out') sign = -1
    const amount = parseFloat(amountNoSign,10)*sign;
    const dateAndType = $x(`.//*[@class='main-title']/dd`, transaction)[0].innerText;
    const title = $x(`.//*[@class='main-title']/dt`, transaction)[0].innerText;
    const transactionDate = dateAndType.split(" - ")[0];
    const transactionType = dateAndType.split(" - ")[1];
    const transferCurrency = transaction.getAttribute('data-currency');
	const balance = $x(`.//span[@class='balance']`, transaction)[0].innerText.replace('SALDO PO OPERACJI: ', '');
	const balanceAmount = balance.slice(0,-4); // todo źle robicie...
	const balanceCurrency = balance.slice(-3);

    var row = closingChar + [transactionDate, title, parseFloat(amount,10), transferCurrency, parseFloat(balanceAmount.replace(' ','').replace(',','.'),10), balanceCurrency, transactionType].join(closingChar + csvSeparator + closingChar) + closingChar;
	csv+=row;
});



console.log(csv);
saveToCsv(csv)

function saveToCsv(data,filename){
	if(!data) {
            console.error(' No data to save')
            return;
        }

        if(!filename) filename = 'transactions.csv'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/csv'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/csv', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
   
}

