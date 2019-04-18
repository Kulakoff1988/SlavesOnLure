const SelectList = () => api.Devisces_Get(-1, {
    Then: res => {
        console.log(res[0].Name, res[0].ID, res[1].Name, res[1].ID);
    }
});

module.exports = SelectList;