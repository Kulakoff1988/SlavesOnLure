const Chart = new Lure.Content({
    Target:`.equipDashboard`,
    Type: `info`,
    Control: {
        Target: `#stats`
    },
    Content: `<div class="forChart"></div>`
});

const chart = new Lure.Chart({
    Target: `.forChart`,
    Type: 'Line',
    Legend: {Visible: true},
    Grid: {Visible: true},
    AxisX: {
        Visible: true,
        Data: [`0:00`, `1:00`, `2:00`, `3:00`, `4:00`, `5:00`, `6:00`, `7:00`, `8:00`, `9:00`, `10:00`, `11:00`, `12:00`, `13:00`, `14:00`, `15:00`, `16:00`, `17:00`, `18:00`, `19:00`, `20:00`, `21:00`, `22:00`, `23:00`]
    },
    AxisY: {Step: 1},
    Series: [{
        Name: 'Посещаемость',
        Color: '#798D00',
        Data: [1, 2, 8, 4, 5, 7, 4, 5, 15, 20, 14, 19, 17, 15, 15, 13, 11, 18, 19, 16, 12, 10, 14, 16],
    },
        {
            Name: 'bla bla bla',
            Color: '#793D00',
            Data: [2, 3, 8, 4, 6, 8, 3, 15, 12, 10, 15, 9, 20, 14, 19, 16, 17, 20, 5, 7, 3, 1, 12, 16],
        },
        {
            Name: 'something else',
            Color: '#793D90',
            Data: [1, 2, 3, 4, 3, 2, 1],
        }],
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

window.Chart = Chart;
module.exports = Chart;