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
                OnConfirm: function () {

                },
            // AutoConfirm: true,
            isTimePicker: true,
            ForbiddenDates: [new Date()]
            });
    }
});

require(`./Features/FeaturesButtons`);
module.exports = Feature;