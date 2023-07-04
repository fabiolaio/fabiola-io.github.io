$(document).ready(function() {
    var $artworkWindow = $('#artwork-window');
    var $artworkFrame = $('#artwork-frame');
    var $windowTitle = $('#window-title');

    // Ensure that the window is hidden at the start
    $artworkWindow.hide();

    // Ensure that the window is hidden at the start
    // $('.window').draggable();

    // Update the clock immediately, then every 1 second
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

    $startButton.click(function() {
        $startMenu.toggle(); // show or hide the start menu
    });

    $startMenuItems.click(function(e) {
        e.stopPropagation();
        
        console.log("Menu item clicked", this);
        console.log("Has children UL", $(this).children('ul').length);
        
        if($(this).children('ul').length > 0) {
            $(this).children('ul').toggle(); // show or hide the nested menu
        } else {
            var artworkUrl = $(this).data('url');
            var title = $(this).data('title');
    
            var dataArtwork = $(this).data('artwork');
            if (dataArtwork === true) {
                $artworkFrame.attr('src', artworkUrl);
                $windowTitle.text(title);
                $artworkWindow.show();
            }
    
            $startMenu.hide(); // hide the start menu
        }
    });
    
    $(document).click(function(event) {
        // If the click was not on the start button or start menu (or any of their children), hide the start menu
        if (!$(event.target).closest('#start-button, #start-menu').length) {
            $startMenu.hide();
        }
    });
});


function updateClock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let strTime = hours + ':' + minutes + ' ' + ampm;

    document.getElementById('clock').textContent = strTime;
}