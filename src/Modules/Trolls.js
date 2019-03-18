const Trolls = new Lure.Content ({
    Name: `Trolls`,
    Type: `toggleContent`,
    Target: `.body`,
    Control: {
        Target: `#Trolls`
    },
    Content: `<div class="toggleContent"></div>`
});

module.exports = Trolls;