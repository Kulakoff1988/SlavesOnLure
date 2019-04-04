const MainTable = new Lure.Content ({
    Name: `MainTable`,
    Target: `.dataDash`,
    Content:    `<div class="mainTable">
                    <div class="tables">
                        <div class="featureChoice" id="stats">Статистика</div>
                        <div class="featureChoice" id="events">События</div>
                        <div class="featureChoice" id="settings">Настройки</div>
                        <div class="featureChoice" id="options">Опции</div>
                    </div>
                </div>`
});

// require('./MainTable/Stats');
// require('./MainTable/Events');
// require('./MainTable/Settings');
// require('./MainTable/Options');
module.exports = MainTable;