// Function to create the TradingView chart
function createChart(coin, timeFrame) {
    const widget = new TradingView.widget({
        width: '100%',
        
        symbol: `CRYPTO:${coin}USD`,
        interval: timeFrame,
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        toolbar_bg: '#black',
        enable_publishing: true,
        hide_legend: true,
        container_id: 'tv-chart',
    });
}

// Function to handle changes in coin selection and time frame
function updateChart() {
    const coin = document.getElementById('coin-select').value;
    createChart(coin);
}

// Initialize the chart with default settings
createChart('BTC', '1D');

// Add event listeners for coin and time frame selection
document.getElementById('coin-select').addEventListener('change', updateChart);
document.getElementById('time-frame').addEventListener('change', updateChart);
