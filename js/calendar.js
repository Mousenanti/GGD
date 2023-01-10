(() => {
    console.log(1)
    const calendarInfo = {
        January: [
            {
                start: 14,
                end: 14,
                event: "Drill"
            },
        ],
        February:  [
            {
                start: 18,
                end: 19,
                event: "Drill"
            },
        ],
        March:  [
            {
                start: 18,
                end: 19,
                event: "Drill"
            },
        ],
        April:  [
            {
                start: 15,
                end: 16,
                event: "Drill"
            },
        ],
        May:  [
            {
                start: 20,
                end: 21,
                event: "Drill"
            },
        ],
        June:  [
            {
                start: 17,
                end: 18,
                event: "Drill"
            },
        ],
        July:  [
            {
                start: 15,
                end: 16,
                event: "Drill"
            },
        ],
        August:  [
            {
                start: 19,
                end: 20,
                event: "Drill"
            },
        ],
        September:  [
            {
                start: 2,
                end: 3,
                event: "Drill - Scottish Games"
            },
        ],
        October:  [
            {
                start: 7,
                end: 7,
                event: "Drill - Fleet Week"
            },
        ],
        November:  [
            {
                start: 11,
                end: 11,
                event: "Drill"
            },
        ],
        December:  [
            {
                start: 16,
                end: 17,
                event: "Drill"
            },
        ]
    };

    var calendar = document.getElementById('calendar');

    for(const month in calendarInfo) {
        var div = document.createElement("div");
        div.classList.add("row", "text-center", "fw-bold");
        div.innerHTML = `
        <div class="pb-5 col-6 border-end border-3 fw-bold fs-1">${month}</div>
        <div class="col-6 month">
            
        </div>
        `;
        for(const event of calendarInfo[month]) {
            var row = document.createElement("div");
            const startStr = event.start.toString().padStart(2, '0');
            const endStr = event.end.toString().padStart(2, '0');
            const days = (startStr === endStr ? startStr : startStr + '-' + endStr);

            row.classList.add("row", "mt-3", "g-0");
            row.innerHTML = `
            <div class="col-6 text-info">${days}</div>
            <div class="col-6 text-start">${event.event}</div>
            `
            div.querySelector('.month').appendChild(row);
        }
        calendar.appendChild(div);
    }
})();
