(() => {

})();

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const SUPER_SECRET_CODES = ["122GGD", "122TSK", "CHIEF CHEUNG IS A RUBBER DUCK"];
function validate() {
    if(SUPER_SECRET_CODES.includes(document.getElementById("password").value)) {
        //console.log(params.redirect);
        //60 sec to a minute, 60 minute to an hour. 24 hours to a day, 10 days.
        document.cookie = "authorized=true; max-age=" + 60 * 60 * 24 * 10;
        window.location.replace(document.baseURI + params.redirect);
    }
    else  {
        document.getElementById("fail").classList.remove("d-none");
    }
}
function checkSubmit(e) {
    if(e && e.keyCode == 13) validate();
}

function showHint() {
    document.getElementById("hint").hidden = false;
}