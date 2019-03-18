const ToggleContentOgres = new Lure.Content ({
    Name: `Ogres`,
    Type: `toggleContent`,
    Target: `.body`,
    Control: {
        Target: `#Ogres`
    },
    Content: `<div class="toggleContent"></div>`
})

module.exports = ToggleContentOgres;