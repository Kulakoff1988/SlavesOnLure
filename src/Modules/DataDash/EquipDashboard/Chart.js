const timeScale = () => {
    const result = [];
    for (let i = 0; i <= 23; i++) {
        result.push(`${i}:00`);
    }
    return result;
};

const Chart = new Lure.Content({
    Target:`.equipDashboard`,
    Type: `info`,
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
            AxisY: {Step: 1},
            Series: [{
                Name: 'Посещаемость',
                Color: '#798D00',
                Data: [1, 2, 8, 4, 5, 7, 4, 5, 15, 20, 14, 19, 17, 15, 20, 19, 18, 18, 19, 16, 12, 10, 14, 16],
            },
            {
                Type: `Line`,
                Name: 'bla bla bla',
                Color: '#793D00',
                Data: [2, 3, 8, 4, 6, 8, 3, 15, 12, 10, 15, 9, 20, 14, 19, 16, 17, 20, 5, 7, 3, 1, 12, 16],
            }],
            // {
            //     Name: 'something else',
            //     Color: '#793D90',
            //     Data: [1, 2, 3, 4, 3, 2, 1],
            // }],
            Tooltip: {
                Format: Tip =>
                    `<div class="tip">
                        <div class="tip-bg"></div>
                        <div class="tip-value">
                            <div class="l-row">
                                <div class="tip-icon" style="background-color: ${Tip.Episode.Color}"></div>
                                <div class="l-row">${Tip.ValueX}: ${Tip.ValueY} посетителей</div>
                            </div>
                        </div>
                    </div>`
            }
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