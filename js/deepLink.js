window.onload = function () {
    var url = window.location.href;
    var params = new URLSearchParams(new URL(url).search);
    document.getElementById('openApp').href = 'cltrd://open?' + params.toString();
};