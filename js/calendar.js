(() => {
    console.log(1)
    const calendarInfo = {
        January: [
            {
                start: 20,
                end: 21,
                event: "Drill"
            },
        ],
        February:  [
            {
                start: 17,
                end: 18,
                event: "Drill"
            },
        ],
        March:  [
            {
                start: 9,
                end: 10,
                event: "Annual Inspection, Unit 25th Birthday"
            },
        ],
        April:  [
            {
                start: 13,
                end: 14,
                event: "Drill"
            },
        ],
        May:  [
            {
                start: 18,
                end: 19,
                event: "Drill, Graduating Cadet Celebration"
            },
        ],
        June:  [
            {
                start: 8,
                end: 9,
                event: "Camping Trip"
            },
        ],
        Mid_June:  [
            {
                start: 15,
                end: 15,
                event: "Seabag Inspection for Training"
            },
        ],
        July:  [
            {
                start: 4,
                end: 4,
                event: "NO DRILL - Fourth of July Service Event, Service Record Pickup"
            },
        ],
        August:  [
            {
                start: 17,
                end: 18,
                event: "Drill"
            },
        ],
        September:  [
            {
                start: 31,
                end: 1,
                event: "AUG 31 Start: Scottish Games"
            },
        ],
        October:  [
            {
                start: 5,
                end: 6,
                event: "Drill - Fleet Week"
            },
        ],
        November:  [
            {
                start: 16,
                end: 17,
                event: "Drill"
            },
        ],
        December:  [
            {
                start: 14,
                end: 15,
                event: "Drill - Holiday Party, Service Record Pickup"
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
