const ToggleContentProtos = new Lure.Content ({
    Name: `Protos`,
    Type: `toggleContent`,
    Target: `.body`,
    Control: {
        Target: `#Protos`
    },
    Content: `<div class="toggleContent"></div>`
})

module.exports = ToggleContentProtos;