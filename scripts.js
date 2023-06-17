$(document).ready(function() {
    var $artworkWindow = $('#artwork-window');
    var $artworkFrame = $('#artwork-frame');
    var $windowTitle = $('#window-title');



    // Ensure that the window is hidden at the start
    $artworkWindow.hide();

    $('.window').draggable();


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
});