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
            api.Devisces_Data_Get(2, {
                Then: res => {
                    res.map(el => {
                        if (el.Err_Count === 0) {
                            el.status = `noErrors`;
                            el.label = `Работает без ошибок`;
                            el.color = `#00FF43`;
                        }
                        if (el.OK_Count > el.Err_Count) {
                            el.status = `moreSuccess`;
                            el.label = `Есть ошибки`;
                            el.color = `#30BE56`;
                        }
                        if (el.OK_Count < el.Err_Count) {
                            el.status = `moreErrors`;
                            el.label = `Требует отладки`;
                            el.color = `#FF9500`;
                        }
                        if (el.OK_Count === 0) {
                            el.status = `noSuccess`;
                            el.label = `Не работает`;
                            el.color = `#FF2300`;
                        }
                    });
                    const result = [];
                    for (let i = 0; i < 24; i ++) {
                        if (res.find(el => el.HourValue === i)) {
                            const currentData = res.find(el => el.HourValue === i);
                            result.push(currentData);
                        }
                        else {
                            result.push({status: `inactive`, label: `Не активно`, color: `#4D4D4D`});
                        }
                    }
                    Monitoring.SetGradient(result);
                    Monitoring.SetData(result);
                }
            });
        });
    }
});

window.FeaturesButtons = FeaturesButtons;
module.exports = FeaturesButtons;