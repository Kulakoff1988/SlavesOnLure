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
            Max: new Date(),
            OnConfirm: () => {
                const dates = this._PeriodPicker.Date.map(date => Lure.Date(date).Format(`DD.MM.YYYY`));
                CheckingBox.State.Date = dates;
            }
        });
    }
});

module.exports = Feature;