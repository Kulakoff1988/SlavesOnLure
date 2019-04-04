const DataDash = new Lure.Content ({
    Name: `DataDash`,
    Target: `.body`,
    Content:    `<div class="dataDash">
                    <div class="equipStatus">
                        <div>
                            <img src="{{Status}}" alt="test">
                        </div>
                        <div><span>{{Name}}</span></div>
                    </div>
                </div>`,
    State: {
        Name: `ВСЕ СИСТЕМЫ В НОРМЕ`,
        Status: "./img/icon-allChecked.png"
    },

    Methods() {
        this.ViewStatus = function (status) {
            this.State.Name = status.equipName;
            this.State.Status = status.equipStatus;
            this.Proto.Refresh();
        }
    }
});

// require('./DataDash/MainTable');
require('./DataDash/EquipDashboard');
window.DataDash = DataDash;
module.exports = DataDash;