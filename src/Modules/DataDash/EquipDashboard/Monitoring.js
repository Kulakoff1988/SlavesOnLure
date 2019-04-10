const {GoogleCharts} = require('google-charts');

// GoogleCharts.load(drawChart);
//
// function drawChart() {
//
//     // Standard google charts functionality is available as GoogleCharts.api after load
//     const data = GoogleCharts.api.visualization.arrayToDataTable([
//         ['Chart thing', 'Chart amount'],
//         ['Lorem ipsum', 60],
//         ['Dolor sit', 22],
//         ['Sit amet', 18]
//     ]);
//     const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.querySelector(`.monitoring`));
//     pie_1_chart.draw(data);
// }

const Monitoring = new Lure.Content ({
    Name: `Monitoring`,
    Target: `.equipDashboard`,
    Type: `info`,
    Visible: true,
    Control: {
        Target: `#monitoring`
    },
    Content:    `<div class="monitoring">
                    <div class="colorGradient"></div>
                    <div class="timeStep"></div>
                    <div class="chartInfo">
                        <div class="chart"></div>
                        <div class="activityInfo">Здесь будет отображаться информация об активности</div>
                    </div>
                </div>`,

    AfterBuild() {
        this.Select(`.timeStep`).innerHTML = timeScale.reduce((acc, item) => {
            return acc + `<div class="step">${item}</div>`
        }, ``);

        this._ActivityStats = new Lure.Chart({
                Target: this.Select(`.chart`),
                Type: 'pie',
                Legend: {
                    Visible: false
                },
                Series: [
                    // {
                    //     // Labels: {
                    //     //     Data: Lure.Culture.MonthNames.Select(m => m + ' ' + this.Parent.CurrentYear),
                    //     //     //Data: ["Январь 2018", "Февраль 2018", "Март 2018", "Апрель 2018", "Май 2018", "Июнь 2018", "Июль 2018", "Август 2018", "Сентябрь 2018", "Октябрь 2018", "Ноябрь 2018", "Декабрь 2018"],
                    //     // },
                    //     Data: [5, 2, 3, 1, 4, 5, 7, 1, 2, 3, 3, 4],
                    //     Colors: ["#6FAD81", "#7AD096", "#82E29F", "#AD776E", "#D0887D", "#E29284", "#ADA66E", "#D0C98A", "#E2D984", "#7DB0D0", "#85C2E2", "#8ACBF4"],
                    //     // Type: 'ring',
                    //     Width: 32,
                    //     AngleStart: -90,
                    // },
                    {
                        Labels: {
                            Data: ["I Квартал 2018", "II Квартал 2018", "III Квартал 2018", "IV Квартал 2018"],
                        },
                        Data: [10, 10, 10, 10],
                        Colors: ["#61A878", "#A56C60", "#9E9960", "#608AAB"],
                        // Type: 'ring',
                        Width: 22,
                        AngleStart: -90,
                    }
                ],
        });
    }
});

window.Monitoring = Monitoring;
module.exports = Monitoring;