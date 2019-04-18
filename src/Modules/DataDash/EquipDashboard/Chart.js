const timeScale = () => {
    const result = [];
    for (let i = 0; i <= 23; i++) {
        result.push(`${i}:00`);
    }
    return result;
};

LegendName = n => {
    const text_forms = ['считываение', 'считывания', 'считываний'];
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return text_forms[2];
    if (n1 > 1 && n1 < 5) return text_forms[1];
    if (n1 === 1) return text_forms[0];
    return text_forms[2];
};

const Chart = new Lure.Content({
    Target:`.equipDashboard`,
    Type: `info`,
    // Visible: true,
    Control: {
        Target: `#stats`
    },
    Content:    `<div class="chart"></div>`,

    AfterBuild () {
        this.chart = new Lure.Chart({
            Target: this.Content,
            Type: 'Bar',
            Legend: {Visible: true},
            Grid: {Visible: true},
            AxisX: {
                Visible: true,
                Data: timeScale()
            },
            // AxisY: {Step: 1},
            Series: [{
                Name: 'Количество считываний меток',
                Color: '#798D00',
                Data: [1,114,3,5,4,22,85,10,17,15,9,10,12,11],
            }],
            Tooltip: {
                Format: Tip =>
                    `<div class="tip">
                        <div class="tip-bg"></div>
                        <div class="tip-value">
                            <div class="l-row">
                                <div class="tip-icon" style="background-color: ${Tip.Episode.Color}"></div>
                                <div class="l-row">${Tip.ValueX}: ${Tip.ValueY} ${LegendName(Tip.ValueY)} меток</div>
                            </div>
                        </div>
                    </div>`
            }
        });
        api.Devisces_Data_Get(1, {
            Then: res => {
                const data = [];
                for (let hourData of res) {
                    data.push(hourData.HourValue);
                }
                if (res.length < 24) {
                    for (let i = 0; i < 24 - res.length; i++) {
                        data.push(0);
                    }
                }
                this.chart.Options.Series[0].Data = data;
                this.chart.Redraw();
            },
        });
    },

    Methods () {
        this.SetData = function (data) {
            this.chart.Options.Series[0].Data = data;
            this.chart.Redraw();
        };
    }
});

window.timeScale = timeScale();
window.Chart = Chart;
module.exports = Chart;