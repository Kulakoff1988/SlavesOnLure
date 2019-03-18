const PanelForElfs_3 = new Lure.Content ({
    Name: `PanelForElfs_3`,
    Type: `panelsForElfs`,
    Parent: Elfs,
    Control: {
        Target: `#elfsChoice-3`
    },
    Content: `<div class="panelsForElfs">Panel-3 content</div>`
});

window.PanelForElfs_1 = PanelForElfs_3;
module.exports = PanelForElfs_3;