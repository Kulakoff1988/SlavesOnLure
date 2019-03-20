const Categories = require('../../Data/Categories');

const AddCatDialog = new Lure.Content ({
    Name: `AddCatDialog`,
    Dialog: true,
    Target: `.forCatDialog`,
    Parent: Gnomes,
    Route: false,
    Dialog: {WrapperHandle: false},
    Control: {
        Target: `#addCat`
    },
    Content:    `<div class="addCatDialog">
                    <div class="title">Add custom category</div>
                    <form>
                        <div>
                            <label>Enter category </label><input type="text" id="catName">
                        </div>
                        <div>
                            <label>Enter Color </label><input type="color" id="catColor">
                        </div>
                    </form>
                    <div class="buttons">
                        <button class="l-button btn-cancel"><img src="./img/icon-cancel.png"></button>
                        <button class="l-button btn-submit"><img src="./img/icon-ok.png"></button>
                    </div>
                </div>`,

    Props() {
        this._CatForm = this.Select(`#catName`);
        this._ColorForm = this.Select(`#catColor`);
    },

    Methods() {
        this._AddCat = function () {
            const newCat = {
                ID: this.Parent.Controller.Data.length + 1,
                Name: this._CatForm.value,
                IconColor: this._ColorForm.value,
                SubCategories: []
            };
            if (this._CatForm.value !== ``) {
                this.Parent.Controller.Add(newCat);
            }
            this._CatForm.value = ``;
        };
    },

    AfterBuild() {
        this.AddEventListener(`click`, `.btn-submit`, () => {
            this._AddCat();
            this.Hide();
        });
        this.AddEventListener(`click`, `.btn-cancel`, () => this.Hide());
    }
});

module.exports = AddCatDialog;