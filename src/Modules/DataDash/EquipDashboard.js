const   equipment = require('../../Data/SelectList'),
        equipIconPaths = {
            100: `<img src="./img/icon-library.png">`,
            101: `<img src="./img/icon-gatesBig.png">`,
            201: `<img src="./img/icon-bookStationBig.png">`
        };

const EquipDashboard = new Lure.Content ({
    Name: `EquipDashboard`,
    Target: `.dataDash`,
    Content:    `<div class="equipDashboard">
                    <div class="forEquipInfo">
                        ${equipIconPaths["100"]}
                        <div class="iconName">Библиотеки</div>
                    </div>
                    <div class="forEquipInfo">
                        ${equipIconPaths["101"]}
                        <div class="iconName">Ворота</div>
                    </div>
                    <div class="forEquipInfo">
                        ${equipIconPaths["201"]}
                        <div class="iconName">Станции книговыдачи</div>
                    </div>
   
                </div>`
});

window.EquipDashboard = EquipDashboard;
module.exports = EquipDashboard;