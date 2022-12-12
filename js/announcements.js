(() => {
    const announcementsInfo = [
        {
            title: "2023 Calendar",
            text: "The Calendar for 2023 is up!  Be sure to check it out.",
            datetime: "Sat 10 DEC 22",
            announcer: "LT NORTON",
            picture: "img/staff/kellynorton.png"
        },
        {
            title: "PRT",
            text: "If you are attending a training this winter, make sure you have a passing PRT score on file. We'll be conducting PRT next drill—start training by doing push ups, practicing planks, and running miles.",
            datetime: "Wed 29 SEP 22",
            announcer: "LT NORTON",
            picture: "img/staff/kellynorton.png"
        }
    ]

    var announcements = document.getElementById('announcements');

    for(const announcement of announcementsInfo) {
        var div = document.createElement("div");
        div.classList.add("row", "py-4");
        div.innerHTML = `
        <img class="h-100 col-2" src="${announcement.picture}"></img>
        <div class="col-10">
        <p class="text-primary fw-bold">${announcement.announcer} > Everyone</p>
        <p><u>
            ${announcement.title}
        </u></p>
        <p>
        ${announcement.text}
        </p>
        <p class="text-muted">${announcement.datetime}</p>
        </div>

        `;
        announcements.appendChild(div);
    }
})();