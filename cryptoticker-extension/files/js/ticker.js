
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

            row = '<td>' + info[i].rank + '</td>';
            row = row + '<td>' + info[i].name + '</td>';
            row = row + '<td>' + parseFloat(info[i].price_usd).toFixed(2); + '</td>';
            
            var change = info[i].percent_change_24h;
            if(change < 0){
                row = row + '<td style="color:red;">' + change + '%</td>';    
            }else{
                row = row + '<td style="color:#4CAF50;">' + change + '%</td>';
            }
            
            newRow.innerHTML = row;
            document.getElementById('cryptoTable').append(newRow);
        
        }
    }
    
}
    
coinCapHTTPRequest.send();

//END