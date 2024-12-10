window.onload = function () {
    var URL = window.location.href;

    var params = new URLSearchParams(new URL(URL).search);
    var newUrl = 'cltrd://open?' + params.toString();

    document.getElementById('openApp').href = newUrl;
};