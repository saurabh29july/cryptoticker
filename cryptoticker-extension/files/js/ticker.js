
// START

var coinCapHTTPRequest = new XMLHttpRequest(); 
coinCapHTTPRequest.open('GET','https://api.coinmarketcap.com/v1/ticker/',true);

coinCapHTTPRequest.onreadystatechange = function()
{
    if(coinCapHTTPRequest.readyState == 4)
    {
        var info = JSON.parse(coinCapHTTPRequest.responseText);

        for(let i=0; i<10; i++) {

            var newRow = document.createElement("tr");

            var rankTD = document.createElement("td");
            rankTD.textContent = info[i].rank;
            newRow.appendChild(rankTD);
                        
            var nameTD = document.createElement("td");
            nameTD.textContent = info[i].name;
            newRow.appendChild(nameTD);
            
            var priceTD = document.createElement("td");
            priceTD.textContent = parseFloat(info[i].price_usd).toFixed(2);
            newRow.appendChild(priceTD);
            
            var changeTD = document.createElement("td");
            var change = info[i].percent_change_24h;
            if(change < 0){
                changeTD.style = "color:red;";
            }else{
                changeTD.style = "color:#4CAF50;";
            }
            changeTD.textContent = change + '%';
            newRow.appendChild(changeTD);
            
            document.getElementById('cryptoTable').appendChild(newRow);
        
        }
    }
    
}
    
coinCapHTTPRequest.send();

//END