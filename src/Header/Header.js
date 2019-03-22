const Header = new Lure.Content ({
    Name: `Header`,
    Target: `.headerContainer`,
    Content:    `<div class="header">
                    <div class="menuButtons">
                        <div class="headerButtons" id="headerButton1">
                            <div class="buttonName">What</div>
                            <div class="subMenu">
                                <div class="headerButton1"></div>
                            </div>
                        </div>
                        <div class="headerButtons" id="headerButton2">
                            <div class="buttonName">Where</div>
                            <div class="subMenu">
                                <div class="headerButton2"></div>
                            </div>
                        </div>
                        <div class="headerButtons" id="headerButton3">
                            <div class="buttonName">When</div>
                            <div class="subMenu">
                                <div class="headerButton3"></div>
                            </div>
                        </div>
                    </div>
                </div>`,
    Props() {
        this._menuButton1 = this.Select(`#headerButton1`);
        this._menuButton2 = this.Select(`#headerButton2`);
        this._menuButton3 = this.Select(`#headerButton3`);
    },

    AfterBuild() {
        this._menuButton1.onmouseenter = function () {
            content1.Show();
        };
        this._menuButton1.onmouseleave = function () {
            content1.Hide();
        };
        this._menuButton2.onmouseenter = function () {
            content2.Show();
        };
        this._menuButton2.onmouseleave = function () {
            content2.Hide();
        };
        this._menuButton3.onmouseenter = function () {
            content3.Show();
        };
        this._menuButton3.onmouseleave = function () {
            content3.Hide();
        }
    }
});

const content1 = require('./Button-1-connent');
const content2 = require('./Button-2-connent');
const content3 = require('./Button-3-connent');
module.exports = Header;