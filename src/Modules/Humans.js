const Humans = new Lure.Content ({
    Name: `Humans`,
    Type: `toggleContent`,
    Target: `.body`,
    Control: {
        Target: `#Humans`
    },
    Content: `<div class="toggleContent Humans"></div>`,

    AfterBuild() {

    }
});

module.exports = Humans;