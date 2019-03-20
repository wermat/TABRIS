const {Button, NavigationView, Page, ui} =
require('tabris');
const NewsPage = require('./pages/NewsPage');
// Create a full-size navigation view to contain
//pages
let navigationView = new NavigationView({ left: 0, top: 0, right: 0, bottom: 0
}).appendTo(ui.contentView);
// Create a main page and add it to the navigation
//view
let mainPage = new Page({ title: 'Main Page'
}).appendTo(navigationView);
new Button({ centerX: 0, top: 100, text: 'Seite öffnen'
}).on('select', () => { new NewsPage().appendTo(navigationView);
}).appendTo(mainPage);
