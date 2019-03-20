const Categories = require('../Data/Categories');
const AddHeroDialog = require(`./Gnomes/GnomesAddHeroDialog`);

const Gnomes = new Lure.Content ({
    Name: `Gnomes`,
    Type: `toggleContent`,
    Visible: true,
    Target: `.body`,
    isRemovable: true,
    Control: {
        Target: `#Gnomes`
    },
    Content:    `<div class="gnomes">
                    <div class="addButton">
                        <button class="l-button" id="addCat"><img src="../img/icon-add.png"></button>
                    </div>
                    <div class="forCatDialog"></div>
                    <div class="forHeroDialog"></div>                    
                </div>`,
    ControllerConfig: {
        Target: ``,
        Data: Categories,
        EmptyMessage: `need some info`,
        ListElement:    `<div class="heroView">
                            <div class="forCat">
                                <div class="catColor" style="background: {{IconColor}}"></div>
                                <div class="catName">{{Name}}</div> 
                                <button class="l-button btn-remove-cat"><img src="../img/icon-x.png"></button>
                            </div>
                            <div class="catContent">
                            {{#each SubCategories}}
                            <div class="forSubCat" data-subid="{{ID}}">
                                <div class="heroString">
                                    <div class="heroName">{{Name}}</div>
                                    <button class="l-button btn-remove-hero" id="{{ID}}">—</button>
                                </div>
                            </div>
                            {{#endeach}}
                            </div>
                            <div class="addHero">
                                <button class="l-button" id="addHero"><img src="../img/icon-add.png"></button>
                            </div>
                        </div>`
    },

    Props() {
        this.SaveButton = this.Target.querySelector(`#btn-submit`);
        this.data = null;
        this.lineId = null;
    },

    AfterBuild() {
        this.TargetData = function (lineId) {
            return this.Controller.GetDataItemByLineID(lineId).Data.SubCategories;
        };

        this._SaveHero = function (dataTarget) {
            if (AddHeroDialog.NameFormValue() !== ``) {
                const newHero = {
                    ID: dataTarget.length + 1,
                    Name: AddHeroDialog.NameFormValue()
                };
                dataTarget.push(newHero);
                AddHeroDialog.NameFormRefresh();
            }
        };

        this.AddEventListener(`click`, `.btn-remove-cat`, (e, p) => {
            this.Controller.Remove(p.LineID);
        });

        this.AddEventListener(`click`, `.btn-remove-hero`, (e, p) => {
            const data = this.Controller.GetDataItemByLineID(p.LineID).Data.SubCategories;
            const idForRemove = e.currentTarget.closest(`.forSubCat`).dataset[`subid`];
            const itemForRemove = data.filter(el => el.ID === +idForRemove);
            data.splice(data.indexOf(itemForRemove[0]), 1);
            const domForRemove = e.currentTarget.closest('.heroString');
            const parentForRemove = domForRemove.closest(`.forSubCat`);
            parentForRemove.removeChild(domForRemove);
            // this.Controller.Refresh(p.LineID);
        });

        this.AddEventListener(`click`, `#addHero`, (e, p) => {
            AddHeroDialog.Show();
            this.lineId = p.LineID;
            this.data = this.TargetData(p.LineID);
        });

        this.SaveButton.addEventListener(`click`, () => {
            this._SaveHero(this.data);
            AddHeroDialog.Hide();
            this.Refresh(this.lineId);
        });

        this.SaveButton.addEventListener(`keydown`, (evt) => {
            if (evt.keyCode === 13) {
                this._SaveHero(this.data);
                AddHeroDialog.Hide();
                this.Refresh(this.lineId);
            }
        });
    }
});

window.Gnomes = Gnomes;
require(`./Gnomes/GnomesAddCatDialog`);
module.exports = Gnomes;