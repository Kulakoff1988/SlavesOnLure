const buttons = [`Humans`, `Elfs`, `Orcs`, `Trolls`, `Gnomes`, `Ogres`, `Protos`, `Zergs`, `Dreneies`, `Protos`, `Protos`, `Protos`, `Protos`, `Protos`, `Protos`, `Protos`, `Protos`,];
buttons.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

module.exports = buttons;