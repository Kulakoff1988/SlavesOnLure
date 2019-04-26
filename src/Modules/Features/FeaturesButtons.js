
const FeaturesButtons = new Lure.Content ({
    Name: `FeaturesButtons`,
    Target: `.equipDashboard`,
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
        CurrentButtons: [],
    },

    Methods() {
        this.ViewStatus = function (status) {
            this.State.Name = `${status.equipName}:`;
            this.State.CurrentButtons = Buttons.find(el => el.id === status.equipID) ? Buttons.find(el => el.id === status.equipID).value : this.State.CurrentButtons;
            this.Proto.Refresh();
            this.Buttons = this.SelectAll(`.f-button`);
            for (let button of this.Buttons) {
                button.dataset[`id`] = status.equipID;
            }
        }
    },

    AfterBuild() {
        this.AddEventListener(`click`, `.f-button`, e => {

        });
    }
});

window.FeaturesButtons = FeaturesButtons;
module.exports = FeaturesButtons;