// Dummy data for stock ticker
const stocks = [
    { name: "AAPL", price: 145.32 },
    { name: "GOOG", price: 2725.60 },
    { name: "TSLA", price: 625.22 },
    { name: "AMZN", price: 3342.88 }
];

// Function to display stock ticker
function displayStockTicker() {
    const tickerDiv = document.getElementById('ticker');
    tickerDiv.innerHTML = stocks.map(stock => `${stock.name}: $${stock.price}`).join(' | ');
}

// Call displayStockTicker on page load
window.onload = function() {
    displayStockTicker();
};

// Currency conversion logic
const conversionRates = {
    USD: { EUR: 0.85, GBP: 0.76 },
    EUR: { USD: 1.18, GBP: 0.89 },
    GBP: { USD: 1.32, EUR: 1.12 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    if (!amount || isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    const rate = conversionRates[fromCurrency][toCurrency];
    const result = amount * rate;
    
    document.getElementById('conversion-result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
