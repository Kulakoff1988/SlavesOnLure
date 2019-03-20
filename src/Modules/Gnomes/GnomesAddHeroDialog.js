const Categories = require('../../Data/Categories');

const AddHeroDialog = new Lure.Content ({
    Name: `AddHeroDialog`,
    Dialog: true,
    Target: `.body`,
    Route: false,
    Dialog: {WrapperHandle: false},
    Content: `<div class="addHeroDialog">
                    <div class="title">Add custom Hero</div>
                    <form>
                        <div>
                            <label>Enter Hero name </label><input type="text" id="heroName">
                        </div>
                    </form>
                    <div class="buttons">
                        <button class="l-button btn-cancel"><img src="./img/icon-cancel.png"></button>
                        <button class="l-button btn-submit" id="btn-submit"><img src="./img/icon-ok.png"></button>
                    </div>
                </div>`,
    Props() {
        this._NameForm = this.Select(`#heroName`);
    },

    Methods() {
        this.NameFormValue = function () {
            return this._NameForm.value;
        };

        this.NameFormRefresh = function () {
            this._NameForm.value = ``;
        };
    },

    AfterBuild() {
        this.AddEventListener(`click`, `.btn-cancel`, () => this.Hide());
    }
});


module.exports = AddHeroDialog;