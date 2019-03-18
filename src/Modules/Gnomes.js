const ToggleContentGnomes = new Lure.Content ({
    Name: `Gnomes`,
    Type: `toggleContent`,
    Target: `.body`,
    Control: {
        Target: `#Gnomes`
    },
    Content: `<div class="toggleContent"></div>`
})

module.exports = ToggleContentGnomes;