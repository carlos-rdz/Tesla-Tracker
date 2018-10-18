// Tracking Tesla's stock price when Elon Tweets


const Display = document.querySelector("[data-display]");
const tickerDisplay = document.querySelector("[data-test]");




fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=TSLA&interval=5min&apikey=demokey=${APIKEY}`)
    .then(j => j.json())
    .then(DisplayTicker)
    .catch(ourCatch)


    function ourCatch(){
        console.log( "Did not work" )
    }

    function DisplayTicker(file){

        let listOfDates = Object.keys(file["Time Series (5min)"]);
        let mostRecent = listOfDates[0];
        let beforeRecent = listOfDates[1];
        let newDate = new Date(mostRecent);
        let newDate2 = new Date(beforeRecent);

        let tickerInfoDisplay = file['Meta Data']["2. Symbol"]

        let recentPrice = parseFloat(file["Time Series (5min)"][mostRecent]["1. open"]).toFixed(2)
        let beforeRecentPrice = parseFloat(file["Time Series (5min)"][beforeRecent]["1. open"]).toFixed(2)


        let tickerInformation = document.createElement('div')
        let tickerPrice = document.createElement('div')
        let priceChange = document.createElement('div')
        
        tickerInformation.textContent = tickerInfoDisplay
        tickerPrice.textContent = recentPrice
        priceChange.textContent = (((recentPrice-beforeRecentPrice) / beforeRecentPrice) * 100).toFixed(2)
        
        tickerDisplay.appendChild(tickerInformation)
        tickerDisplay.appendChild(tickerPrice)
        tickerDisplay.appendChild(priceChange)

    }
    
// DisplayTicker();