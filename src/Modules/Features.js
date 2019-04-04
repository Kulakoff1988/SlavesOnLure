const Feature = new Lure.Content ({
    Name: `Feature`,
    Target: `.body`,
    Content:    `<div class="features">
                    <div class="filter">
                        <span>Фильтр</span>
                        <div class="forPeriodPicker"></div>
                    </div>
                </div>`,
    AfterBuild() {
        this._PeriodPicker = new Lure.PeriodPicker({
                Target: `.forPeriodPicker`
            });
    }
});

module.exports = Feature;