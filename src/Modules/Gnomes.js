const Categories = require('../Data/Categories');

const Gnomes = new Lure.Content ({
    Name: `Gnomes`,
    Type: `toggleContent`,
    Visible: true,
    Target: `.body`,
    Control: {
        Target: `#Gnomes`
    },
    Content:    `<div class="gnomes">
                    <div class="addButton">
                        <button class="l-button" id="addCat"><img src="../img/icon-add.png"></button>
                    </div>
                    <div class="forDialog"></div>
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
                                <button class="l-button"><img src="../img/icon-add.png"></button>
                            </div>
                        </div>`
    },

    AfterBuild() {
        this.AddEventListener(`click`, `.btn-remove-cat`, (e, p) => {
            this.Controller.Remove(p.LineID);
        });
        this.AddEventListener(`click`, `.btn-remove-hero`, (e, p) => {
            const data = this.Controller.Data[p.LineID].SubCategories;
            const idForRemove = e.currentTarget.closest(`.forSubCat`).dataset[`subid`];
            const itemForRemove = this.Controller.Data[p.LineID].SubCategories.filter(el => el.ID === +idForRemove);
            data.splice(data.indexOf(itemForRemove[0]), 1);
            this.Controller.Refresh(p.LineID);
        });
    }
});

window.Gnomes = Gnomes;
require(`./Gnomes/GnomesAddCatDialog`);
module.exports = Gnomes;