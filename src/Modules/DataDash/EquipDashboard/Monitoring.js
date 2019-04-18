const statusGradient = data => {
    const parent = document.createElement(`div`);
    return data.reduce((acc, item) => {
        const child = document.createElement(`div`);
        if (item.status) {
            child.classList.add(item.status);
            parent.appendChild(child);
        }
        else {
            child.classList.add(`inactive`);
            parent.appendChild(child);
        }
        return acc;
    }, parent);
};

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

    Methods() {
        this.SetData = data => {
            const pieData = hourData => {
                const labels = Array.from(hourData.reduce((acc, item) => {
                    acc.add(item.label);
                    return acc;
                }, new Set));
                return labels.reduce((acc, item) => {
                    return ({...acc, [item]: data.filter(el => el.label === item).length});
                },{});
            };
            const pieColor = Array.from(data.reduce((acc, item) => {
                acc.add(item.color);
                return acc;
            }, new Set()));
            this._ActivityStats.Series[0].Labels.Data = Object.keys(pieData(data));
            this._ActivityStats.Series[0].Data = Object.values(pieData(data));
            this._ActivityStats.Series[0].Colors = pieColor;
            this._ActivityStats.Redraw();
        };

        this.SetGradient = data => {
            this.Gradient = this.Select(`.colorGradient`);
            children = statusGradient(data);
            this.Gradient.innerHTML = children.innerHTML;
        }
    },

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
                        Type: 'ring',
                        Width: 200,
                        AngleStart: -90,
                    }
                ],
        });
    }
});

window.Monitoring = Monitoring;
module.exports = Monitoring;