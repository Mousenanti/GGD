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
            title: "4th of July Parade and Cadet Tan's Chief Pinning",
            text: `4th of July Parade and Cadet Tan's Chief Pinning 
 
            Date / Time: 04 Jul 23  
            Meeting time: 0900 
            Meeting location : Corner of Park Street and Lincoln Street, Alameda, CA (POD to follow with more detail)  
            Uniform of the day: Type III for cadets, Khakis for Chiefs 
            What to bring: hydration, sunblock
            
            We will participate be in the 4th of July Parade for Alameda, BBQ lunch provided.
            
            Cadet Tan's Chief pinning to follow after the parade post time and location TBD.
            
            Parents welcome to assist distribution of hydration along the parade route for cadets
            
            RSVP to CO Norton knorton@seacadets.org`,
            datetime: "Fri 30 JUN 23",
            announcer: "General Announcement",
            picture: "img/staff/general.png"
        },
        {
            title: "NO DRILL IN JUNE",
            text: `All, 

  

            There will be no drill in June!  Our next unit meeting will be on the Fourth of July on the Hornet.  Standby for additional details on this event. `,
            datetime: "Thu 15 JUN 23",
            announcer: "General Announcement",
            picture: "img/staff/general.png"
        },
        {
            title: "RESPONSE REQUIRED - 2023 April Drill Meal Response Form",
            text: `All,          

            April drill is on April 15-16 and that Saturday is also our Annual Inspection.      

            For meal planning purpose only, please respond to the attached google form for meals NO LATER THAN Monday 10 Apr 23 at 2359.  

            Click below:             

            <a href="https://forms.gle/UTVdGWFsmWcYZHCo9">https://forms.gle/UTVdGWFsmWcYZHCo9</a>

            Thank you.  

            <b style="color:Red;">100% Attendance Required  ALL HANDS MUST ATTEND or it will count against us!</b>          

            Note, This form is for meal planning only.  This is not a substitution to follow your chain of command protocol to excuse absences. `,
            datetime: "Fri 07 APR 23",
            announcer: "INST MUI",
            picture: "img/staff/instmui.png"
        },
        {
            title: "CANCELED: 19 Mar 23 Annual Inspection & Potluck",
            text: `Thank you for those that have responded to the potluck sign up.  

            Sunday 19Mar23 Annual Inspection has been postponed therefore the award ceremony potluck is now canceled.   

            We will proceed to have a 1 day drill on Saturday 18Mar23.  An updated POD will be posted on the website soon.  `,
            datetime: "Thu 16 MAR 23",
            announcer: "General Announcement",
            picture: "img/staff/general.png"
        },
        {
            title: "Aviation Training in Lemoore",
            text: `Cadets,    

            The Aviation Training at Naval Air Staion Lemoore is posted.  Check Magellan trainings for more info.  Read the training details.  It fills quick, so if you want to go, apply for it now! 

            Other trainings are starting to be posted as well.  

            Ex. Off. DeMartini`,
            datetime: "Mon 13 MAR 23",
            announcer: "INST DeMARTINI",
            picture: "img/staff/xodemartini.png"
        },
        {
            title: "Annual Inspection Flyer and Potluck Signup",
            text: `Attached flyer for this year's Annual Inspection and Awards Ceremony.           

            To sign up for potluck click <a href="https://forms.gle/yRn1yenLG983eV4e6">HERE.</a>     

            Click here to <a href="https://docs.google.com/spreadsheets/d/1DU4O9wHKVXuVtDofO4XSqWcSaZeJmbg6pwd1gkYMKnU/edit?usp=sharing">view</a> current signups.       

            Kindly RSVP by15Mar23.`,
            datetime: "Sun 12 MAR 23",
            announcer: "General Announcement",
            picture: "img/staff/general.png"
        },
        {
            title: "Crab Feed this Friday",
            text: `Cadets, 

            We are still looking for more volunteers for the Crab Feed this Friday evening at the Alameda Elks Lodge. 

            Refer to previous email for details.  We need more cadets to help. 

            Please RSVP as soon as possible. 
    
            Thanks. 

  

            EX OFF Demartini`,
            datetime: "Sun 26 FEB 23",
            announcer: "INST DeMARTINI",
            picture: "img/staff/xodemartini.png"
        },
        {
            title: "Volunteer Opportunity/Crab Feed",
            text: `Cadets & Adult Volunteers,  

            The Navy League is holding their annual Crab Feed Fundraiser at the Alameda Elks Lodge on Friday, March 3rd.  

            If you are interested, please RSVP me at my email: Mattdemartini@yahoo.com  

            The uniform of the day is NWU III.  Arrival time is 5pm.  You will receive 6 volunteer hours towards your community service ribbon.  

            I have included the flyer to the event with the address.  Please RSVP as soon as possible so we can give them a head count of volunteers.  You will be fed at the end of the function.  There is usually plenty of crab and dessert left over.  The cadets who volunteered last year did an outstanding job. 

            Exec. Off.  

            DeMartini`,
            datetime: "Wed 22 FEB 23",
            announcer: "INST DeMARTINI",
            picture: "img/staff/xodemartini.png"
        },
        {
            title: "POD Posted",
            text: "The Plan of the Day for the upcoming drill has been updated under the POD section in the cadet portal. Please disregard the document's suggestion that it is a November schedule.",
            datetime: "Tue 14 FEB 23",
            announcer: "General Announcement",
            picture: "img/staff/general.png"
        },
        {
            title: "RESPONSE REQUIRED -2023 February Drill Meal Response Form",
            text: `13Feb23:  

            For those that responded already, thank you and no further action is required.  

            For the few that have not, it is DUE TODAY.  

            <a href="https://forms.gle/CCJZbiocpU6cXHpj6">https://forms.gle/CCJZbiocpU6cXHpj6</a>

            Even if you are not attending, you still need respond to the meal sheet without checking off the meals. This is for meal planning only. Do not leave it up to the planning staff to figure that out.   

            Thank you. 

            P.S.  The leaguers are all accounted for. You can do this.`,
            datetime: "Mon 13 FEB 23",
            announcer: "General Announcement",
            picture: "img/staff/general.png"
        },
        {
            title: "Meal Response Form",
            text: `Good morning, Cadets and Leaguers,   

            Please respond to the meal response google form no later than Monday 13 Feb 23.

            Click here =>  <a href="https://forms.gle/CCJZbiocpU6cXHpj6">https://forms.gle/CCJZbiocpU6cXHpj6</a>
            
            Unit needs time to plan and purchase meal items in advanced for our large group. If we do not hear from you, we will assume you ARE coming and you will be responsible for paying the $20 for meals. Saturday lunch is always BYO. There may be times the concession stand on the ship is not open and we don’t have control over that, so please plan ahead.    
            
            The meal cost for this February drill will remain $20. Due to continuing price increase of food supplies, going forward a typical drill meal cost will increase to $25. Thank you for your understanding.   
            
            As always, meal response sheet is not where you notify absences.  Continue to follow your Chain of Command for this.    
            
            See you all at the next drill.`,
            datetime: "Sat 11 FEB 23",
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
