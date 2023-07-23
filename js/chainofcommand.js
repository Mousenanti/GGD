(() => {

    const apiKey = 'AIzaSyD32x20Jd9NfzkIc0qmYNr83XPAaQdZpnw';
    const spreadsheetId = '1BLi86jGETsDZ59nNZZYXVU1AUC43ojhTnUq5K3W6u6g';
    const range = 'B2:G44';

    const CO = "LT Kelly Norton";

    document.getElementById('commanding-officer').innerText = CO;


    gapi.load('client', initClient);

    function initClient() {
      gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(() => {
        // Call the Google Sheets API to get data
        gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: spreadsheetId,
          range: range,
          majorDimension: 'COLUMNS'

        }).then(response => {
          const values = response.result.values;
          if (values && values.length > 0) {
            
            handle(values);

          } else {
            console.log('No data found.');
          }
        }).catch(error => {
          
            

        });
      });
    }

    function handle(values) {

        greyghost = values[0];
        kearsarge = values[1];

        var chain = document.getElementById('chain');
        for(i = 0; i < Math.max(greyghost.length, kearsarge.length); i++) {
            gold = position => (position == "Executive Officer") /*|| name.includes("CPO")*/ ? "text-warning" : "";
            var [ggdPos, ggdName] = greyghost[i] === undefined ? [1, 1] : greyghost[i].split(": ");
            var [tskPos, tskName] = kearsarge[i] === undefined ? [1, 1] : kearsarge[i].split(": ");

            var div = document.createElement("div");
            div.classList.add("row", "mb-4");

            var ggdStr = ggdPos === 1 ? "" : `
            <div class="col-6">
                <div class="rounded-3 bg-white p-2">
                    ${ggdPos}
                    <div class="display-5 ${gold(ggdPos)}">${ggdName}</div>
                </div>
            </div>

            `;
            var tskStr = tskPos === 1 ? "" :`
            <div class="col-6">
                <div class="rounded-3 bg-white p-2">
                    ${tskPos}
                    <div class="display-5 ${gold(tskPos)}">${tskName}</div>
                </div>
            </div>
            `;

            div.innerHTML = ggdStr + tskStr;
            chain.append(div);
        }
        chain.removeChild(document.getElementById("loading"));

        /*
        var squads = document.getElementById('squads');
        for(const squad in greyghost.squads) {

            var div = document.createElement("div");
            const leader = greyghost.squads[squad].leader;
            const people = greyghost.squads[squad].people;
            div.classList.add("col-md-6", "col-12");
            div.innerHTML = `
            <div class="bg-white p-2">
                ${squad} Squad Leader
                <div class="display-6 ${leader} mb-2">${leader}</div>
                <ul class="list-unstyled">
                    ${people.map(x => `<li>${x}</li>`).join('')}
                </ul>
            </div>`

            squads.appendChild(div);
        }*/
    }
})();
