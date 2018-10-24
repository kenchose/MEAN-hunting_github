$(document).ready(function() {
    $.get("https://api.github.com/users/kenchose", displayName);

    function displayName (data) {
        $("button").click(function() {
            $(this).after(`<h1>${data.name}</h1>`)
        })
    };
});