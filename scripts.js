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
    
    $(document).ready(function() {
        var $windows = $('.window'); // All the windows
        var $windowTitle = $('.title-bar span'); // The title bar span to show the title of window
    
        // On clicking any icon
        $('.icon').click(function() {
            var windowId = $(this).data('window'); // Get the window ID from the data-window attribute of the clicked icon
            var windowUrl = $(this).data('url'); // Get the window URL from the data-url attribute of the clicked icon
            var windowTitle = $(this).find('p').text(); // Get the title from the text of the p element in the clicked icon
    
            $windows.hide(); // Hide all windows
            $('#' + windowId).load(windowUrl); // Load the window content from the URL
            $('#' + windowId).show(); // Show the clicked window
            $windowTitle.text(windowTitle); // Set the window title
        });
    
        // On clicking the close button
        $('.title-bar button').click(function() {
            $windows.hide(); // Hide all windows
        });
    });
    

var $startButton = $('#start-button');
var $startMenu = $('#start-menu');
var $startMenuItems = $('.start-menu-item');

$startButton.click(function() {
    $startMenu.toggle(); // show or hide the start menu
});

$startMenuItems.click(function() {
    var artworkUrl = $(this).data('url');
    var title = $(this).data('title');

    $artworkFrame.attr('src', artworkUrl);
    $windowTitle.text(title);
    $artworkWindow.show();
    $startMenu.hide(); // hide the start menu
});

$(document).click(function(event) {
    // If the click was not on the start button or start menu (or any of their children), hide the start menu
    if (!$(event.target).closest('#start-button, #start-menu').length) {
        $startMenu.hide();
    }
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