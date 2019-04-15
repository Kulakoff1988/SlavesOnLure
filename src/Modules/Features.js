const Feature = new Lure.Content ({
    Name: `Feature`,
    Target: `.body`,
    Content:    `<div class="features">
                    <div class="filter">
                        <span>Фильтр даты</span>
                        <div class="forPeriodPicker"></div>
                    </div>
                    <div class="forButtons"></div>
                </div>`,
    AfterBuild() {
        this._PeriodPicker = new Lure.PeriodPicker({
            Target: `.forPeriodPicker`,
            OnConfirm: () => {
                Monitoring.SetData([5, 6, 7, 8])
            },
            isTimePicker: false,
            ForbiddenDates: [new Date()]
            });
    }
});

require(`./Features/FeaturesButtons`);
module.exports = Feature;