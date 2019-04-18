startChartData = () => api.Devisces_Data_Get(1, {
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
        return data;
    },
});

// window.startChartData = startChartData;
// module.exports = startChartData;