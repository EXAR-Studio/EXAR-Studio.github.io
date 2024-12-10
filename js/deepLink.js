window.onload = function () {
    var URL = window.location.href;

    var params = new URLSearchParams(new URL(URL).search);
    document.getElementById('openApp').href = 'cltrd://open?' + params.toString();
};