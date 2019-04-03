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
        Name: `Все системы в норме`,
        Status: `./img/icon-allChecked.png`
    },

    Methods() {
        this.ViewStatus = function (status) {
            this.State.Name = status.equipName;
            this.State.Status = status.equipStatus;
            this.Proto.Refresh();
        }
    }
});

window.DataDash = DataDash;
module.exports = DataDash;