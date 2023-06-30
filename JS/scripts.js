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
    
    $submenuItems.click(function(e) {
        e.stopPropagation(); // prevent triggering of parent's click event
    
        var $submenu = $(this).children('ul');
        var submenuHeight = $submenu.outerHeight(); // get height of submenu
        var menuItemPos = $(this).offset().top; // get top position of menu item
        var menuItemHeight = $(this).outerHeight(); // get height of menu item
        var viewportHeight = $(window).height(); // get height of viewport
    
        if($submenu.length > 0) { // if this is a submenu parent
            if(viewportHeight - menuItemPos - menuItemHeight < submenuHeight) { // if the submenu is too tall to fit below the item
                $submenu.css('top', '-' + (submenuHeight - menuItemHeight) + 'px'); // set the top position of the submenu to be above the menu item
            } else {
                $submenu.css('top', '100%'); // otherwise, position it normally
            }
    
            $submenu.toggle(); // show or hide the nested menu
        } else { // if this is a submenu item
            var artworkUrl = $(this).data('url');
            var title = $(this).data('title');
    
            if(artworkUrl && title) {
                $artworkFrame.attr('src', artworkUrl);
                $windowTitle.text(title);
                $artworkWindow.show();
                $startMenu.hide(); // hide the start menu
            }
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