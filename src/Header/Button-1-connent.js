const MenuButtons = require('../Data/HeaderMenuList');

const Button_1_Content = new Lure.Content ({
    Name: `button-1-content`,
    Type: `headerMenu`,
    Target: `.headerButton1`,

    Content:    `<div class="button-1-content">
                    <div class="triangle"></div>
                </div>`,
    ControllerConfig: {
        Target: ``,
        Data: MenuButtons,
        ListElement:    `<div class="menuString">
                            <div class="menuName" data-rowid="{{ID}}">{{Name}}</div>
                            <div class="subMenuString" data-rowid="{{ID}}"></div>
                        </div>`
    },

    // Props() {
    //     this.contents = this.Content.querySelectorAll(`.subMenuString`);
    // },

    AfterBuild() {
        this._Contents = this.Content.querySelectorAll(`.subMenuString`);
        const contents = this._Contents;
        this._Buttons = this.Content.querySelectorAll(`.menuName`);
        for (let button of this._Buttons) {
            button.onmouseenter = function (evt) {
                buttonID = evt.currentTarget.dataset.rowid;
                for (let content of contents) {
                    if (buttonID === content.dataset.rowid) {

                    }
                }
            }
        }
    }
});

module.exports = Button_1_Content;