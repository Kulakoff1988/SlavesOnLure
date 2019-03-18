const PanelForElfs_2 = new Lure.Content ({
    Name: `PanelForElfs_2`,
    Type: `panelsForElfs`,
    Parent: Elfs,
    Control: {
        Target: `#elfsChoice-2`
    },
    Content: `<div class="panelsForElfs">Panel-2 content</div>`
});

window.PanelForElfs_1 = PanelForElfs_2;
module.exports = PanelForElfs_2;