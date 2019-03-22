const MenuButtons = require('../Data/HeaderMenuList');

const Button_3_Content = new Lure.Content ({
    Name: `button-3-content`,
    Type: `headerMenu`,
    Target: `.headerButton3`,

    Content:    `<div class="button-3-content">
                    <div class="triangle"></div>
                </div>`,
    ControllerConfig: {
        Target: ``,
        Data: MenuButtons,
        ListElement:    `<div class="menuString">
                            <div>{{$this.Name}}</div>
                        </div>`
    },

});

module.exports = Button_3_Content;