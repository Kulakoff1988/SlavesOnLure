const ToggleContentOrcs = new Lure.Content ({
    Name: `Orcs`,
    Type: `toggleContent`,
    Target: `.body`,
    Control: {
        Target: `#Orcs`
    },
    Content: `<div class="toggleContent">Orcs</div>`
})

module.exports = ToggleContentOrcs;