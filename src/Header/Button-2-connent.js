const MenuButtons = require('../Data/HeaderMenuList');

const Button_2_Content = new Lure.Content ({
    Name: `button-2-content`,
    Type: `headerMenu`,
    Target: `.headerButton2`,

    Content:    `<div class="button-2-content">
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

module.exports = Button_2_Content;