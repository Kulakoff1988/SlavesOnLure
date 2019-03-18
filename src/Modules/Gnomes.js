const Categories = require('../Data/Categories');

const Gnomes = new Lure.Content ({
    Name: `Gnomes`,
    Type: `toggleContent`,
    Visible: true,
    Target: `.body`,
    Control: {
        Target: `#Gnomes`
    },
    Content: `<div class=" gnomes"></div>`,
    ControllerConfig: {
        Target: ``,
        Data: Categories,
        EmptyMessage: `need some info`,
        ListElement:    `<div class="heroView">
                            <div class="forName">
                                <div>{{Name}}</div>
                                <button class="l-button">Remove</button>
                            </div>
                            <div class="forSubCat">
                                <div></div>
                            </div>
                        </div>`
    }
});

module.exports = Gnomes;