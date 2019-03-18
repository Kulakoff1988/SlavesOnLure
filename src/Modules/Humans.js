const Humans = new Lure.Content ({
    Name: `Humans`,
    Type: `toggleContent`,
    Target: `.body`,
    Control: {
        Target: `#Humans`
    },
    Content: `<div class="toggleContent"></div>`
});

module.exports = Humans;