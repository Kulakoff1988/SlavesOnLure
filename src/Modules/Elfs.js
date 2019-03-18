const Elfs = new Lure.Content ({
    Name: `Elfs`,
    Type: `toggleContent`,
    Visible: true,
    Target: `.body`,
    Control: {
        Target: `#Elfs`
    },
    Content: `<div class="toggleContent"></div>`
})

window.Elfs = Elfs;
require('./Elfs/tableForElfs');
Elfs.PanelForElfs_1 = require('./Elfs/panelsForElfs-1');
Elfs.PanelForElfs_2 = require('./Elfs/panelsForElfs-2');
Elfs.PanelForElfs_3 = require('./Elfs/panelsForElfs-3');
module.exports = Elfs;


