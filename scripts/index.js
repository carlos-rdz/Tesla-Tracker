// Tracking Tesla's stock price when Elon Tweets

// 4XO1K39LGJYHG2FU

const Display = document.querySelector("[data-display]");




fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=TSLA&interval=5min&apikey=demokey=4XO1K39LGJYHG2FU')
    .then(j => j.json())
    .then(getInfo)
    .then(DisplayInfo)
    .catch()



    function getInfo(file) {

        // puts most recent quote times in array
        // let newListofDates = listOfDates.map(x => new Date(x));
        // newListofDates.sort(function(a, b){return b - a});
        // let mostRecent = newListofDates[0]

        let listOfDates = Object.keys(file["Time Series (5min)"]);
        let mostRecent = listOfDates[0];
        let beforeRecent = listOfDates[1];
        let newDate = new Date(mostRecent);
        let newDate2 = new Date(beforeRecent);

        let ticker = file['Meta Data']["2. Symbol"]

        let recentPrice = parseFloat(file["Time Series (5min)"][mostRecent]["1. open"]).toFixed(2)
        let beforeRecentPrice = parseFloat(file["Time Series (5min)"][beforeRecent]["1. open"]).toFixed(2)
        
        let change = (((recentPrice-beforeRecentPrice) / beforeRecentPrice) * 100).toFixed(2)
        
        let Output = `${ticker} was last trading at $${recentPrice} on ${newDate} a change from $${beforeRecentPrice} a ${change}% change`
        
        return Output
    }

    function DisplayInfo(file) {

       Display.textContent = file

    }

    function ourCatch(){

        return "Did not work"
        
    }

    
