const   Buttons = require('../../Data/EquipStats'),
        data = [1, 2, 8, 4, 5, 7, 4, 5, 15, 20, 14, 19, 17, 15, 15, 13, 11, 18, 19, 16, 12, 10, 14, 16].reverse();

const FeaturesButtons = new Lure.Content ({
    Name: `FeaturesButtons`,
    Target: `.forButtons`,
    Content:    `<div class="featuresButtons">
                    <div class="equipName">{{Name}}</div>
                    <div class="f-buttons">
                    {{#each CurrentButtons}}
                        <div class="f-button l-button">{{$this}}</div>
                    {{#endeach}}
                    </div>
                </div>`,
    State: {
        Name: `Выберите модуль`,
        CurrentButtons: []
    },

    Methods() {
        this.ViewStatus = function (status) {
            this.State.Name = `${status.equipName}:`;
            this.State.CurrentButtons = Buttons.find(el => el.id === status.equipID) ? Buttons.find(el => el.id === status.equipID).value : this.State.CurrentButtons;
            this.Proto.Refresh();
        }
    },

    AfterBuild() {
        this.AddEventListener(`click`, `.f-button`, e => {
            Chart.SetData(data);
            api.Devisces_Get(-1, {
                Then: res => {
                    console.log(res);
                }
            });
        });
    }
});

window.FeaturesButtons = FeaturesButtons;
module.exports = FeaturesButtons;