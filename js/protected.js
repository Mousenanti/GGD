//if(document.cookie.indexOf("authorized") === 'replace me!') {
//use above for testing previews
if(document.cookie.indexOf("authorized") === -1) {
    console.log(1);

    window.location.replace(document.baseURI + "protected.html?redirect=" + encodeURIComponent(location.href.replace(document.baseURI, '')));
}