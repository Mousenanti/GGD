(() => {
    const announcementsInfo = [
        {
            title: "March 2025 Volunteer Opportunities",
            text: `
            Date / Time: 22 MAR 25  
            Meeting time: 1700-2100
            Meeting location : Alameda Veterans Hall, 2203 Central Ave., Alameda
            Uniform of the day: Type 3
            What to bring: hydration
            
            We will be assisting with the Spring Bingo event. 
            RSVP: <a href="https://forms.gle/SjDZpZ47wjipRW2p6">https://forms.gle/CCJZbiocpU6cXHpj6</a>`,

            datetime: "Sat 22 Mar 25",
            announcer: "General Announcement",
            picture: "img/staff/general.png"
        },
        {
            title: "Spring Training Opportunity",
            text: `
            Any Sea Cadets who are looking to complete a training before summer, please let us
            know if you would be interested in attending a Recruiting Station Training during your spring break!
            If you just need a training to advance and you were not able to attend this winter, or wont be
            able to this summer, please send an email to knorton@seacadets.org by Saturday March 22nd
            with the following information:
 
                What are the dates of your spring break?
                Did you miss winter training or will you be missing summer training?
                What city do you live in?
                Are you able to drive yourself to this training or will you need to find a ride?

            Please note that this is a "day camp" style training where you will need to find a ride
            to the chosen recruiting station each day for 5 week days.  Once we know who is interested,
            we will see if a central location can be found and which adults we can find to staff as escorts.`,

            datetime: "Spring Break 2025",
            announcer: "General Announcement",
            picture: "img/staff/general.png"
        },
        {
            title: "Deadline Extension: 2025 Scholarship Essay Contest",
            text: `   
            We have extended the essay contest until 25 APR 25.
            We are happy to announce that we will be launching a new annual contest for an opportunity to be
            awarded two different scholarships! This will involve an essay to be turned in no later than 25 APR 25.
            
            The LCDR Laneya Littrell Training Scholarship was someone who loved the Sea Cadet program and loved to run trainings.
            Some of which, a few of us have attended and assisted in.
            The winner of this scholarship will receive one free training up to $250.  
            
            The LCDR Jack Powell Scholarship is the founder of Grey Ghost Division and Training Ship Kearsarge.
            The winner of this scholarship will receive one free year of enrollment.
            
            Please click below for more information, and good luck! 
            <a href="https://drive.google.com/file/d/1lGLfLw_pKWrPNLH4kYBt-1PSIszafRdN/view?usp=sharing">LCDR Laneya Littrell Training Scholarship</a>
            <a href="https://drive.google.com/file/d/1yOOXoRAd3d4Jrmap2aXyH8vhzrNHbMuD/view?usp=sharing">LCDR Jack Powell Enrollment Scholarship</a>
            `,

            datetime: "",
            announcer: "General Announcement",
            picture: "img/staff/general.png"


































            
        }
    ]

    var announcements = document.getElementById('announcements');

    for(const announcement of announcementsInfo) {
        var div = document.createElement("div");
        div.classList.add("row", "py-4");
        div.innerHTML = `
        <img class="h-100 col-lg-1 col-2 rounded" src="${announcement.picture}"></img>
        <div class="col-lg-11 col-10">
        <p class="text-primary fw-bold">${announcement.announcer} > Everyone</p>
        <p><u>
            ${announcement.title}
        </u></p>
        <p>
        ${announcement.text.replaceAll("\n", "<br>")}
        </p>
        <p class="text-muted">${announcement.datetime}</p>
        </div>

        `;
        announcements.appendChild(div);
    }
})();
