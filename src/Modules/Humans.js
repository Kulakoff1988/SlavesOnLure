const TreeBuilder = require('../Data/TreeBuilder');
const menuList = require('../Data/HeaderMenuList');

const Humans = new Lure.Content ({
    Name: `Humans`,
    Type: `toggleContent`,
    Target: `.body`,
    Control: {
        Target: `#Humans`
    },
    Content: `<div class="toggleContent Humans"></div>`,

    AfterBuild() {
        this.Menu = new TreeBuilder({
            Target: `.Humans`,
            Data: menuList,
            // Template: `<div class="menu">1</div>`,
        })
    }
});

module.exports = Humans;