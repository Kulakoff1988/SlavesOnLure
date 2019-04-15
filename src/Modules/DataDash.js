const DataDash = new Lure.Content ({
    Name: `DataDash`,
    Target: `.body`,
    Content:    `<div class="dataDash">
                    <div class="forEqAndFeat">
                        <div class="equipStatus">
                            <div>
                                <img src="./img/icon-allChecked.png" alt="test">
                            </div>
                            <div>
                                <span>{{Name}}</span>
                            </div>
                        </div>
                    </div>
                </div>`,
    State: {
        Name: `ВСЕ СИСТЕМЫ В НОРМЕ`,
        Status: "./img/icon-allChecked.png"
    },

    Methods() {
        this.ViewStatus = function (status) {
            this.State.Name = `${status.equipName}:`;
            this.State.Status = status.equipStatus;
            this.Proto.Refresh();
        }
    },

    AfterBuild() {
        const displayWidth = window.matchMedia('(max-width: 768px)').matches;
        if (displayWidth) {
            const newParentForFeatures = this.Content.querySelector(`.forEqAndFeat`);
            newParentForFeatures.appendChild(this.Target.querySelector(`.features`));
            this.Target.querySelector(`.features`).classList.add(`forTabDisplay`);
            this.Target.removeChild(this.Target.querySelector(`.features`));
        }
    }
});

// require('./DataDash/MainTable');
require('./DataDash/EquipDashboard');
window.DataDash = DataDash;
module.exports = DataDash;