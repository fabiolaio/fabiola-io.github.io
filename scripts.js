$(document).ready(function() {
    var $artworkWindow = $('#artwork-window');
    var $artworkFrame = $('#artwork-frame');
    var $windowTitle = $('#window-title');

    $artworkWindow.hide();

    $('.window').draggable();

    updateClock();
    setInterval(updateClock, 1000);

    $('.icon').click(function() {
        var artworkUrl = $(this).data('url');
        var artworkName = $(this).find('p').text();
    
        $artworkFrame.attr('src', artworkUrl);
        $windowTitle.text(artworkName);
        $artworkWindow.show();
    });

    $('.title-bar button').click(function() {
        $artworkWindow.hide();
    });

    var $startButton = $('#start-button');
    var $startMenu = $('#start-menu');
    var $startMenuItems = $('.start-menu-item');

    $startButton.click(function(event) {
        $startMenu.toggle();
        event.stopPropagation();
    });

    $startMenuItems.click(function(event) {
        console.log("Start menu item clicked");

        var url = $(this).data('url');
        var title = $(this).data('title');

        if (url.startsWith('http')) {
            window.open(url, '_blank');
        } else {
            $artworkFrame.attr('src', url);
            $windowTitle.text(title);
            $artworkWindow.show();
        }

        $startMenu.hide();
        event.stopPropagation();
    });
});

function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let strTime = hours + ':' + minutes + ' ' + ampm;

    document.getElementById('clock').textContent = strTime;
}
