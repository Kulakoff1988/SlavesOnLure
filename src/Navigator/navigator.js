const Kinds = require('../Data/toggleKinds');
let resultString = ``;
for (let kind of Kinds) {
    resultString += `<div class="kindOfLife" id="${kind}"><span>${kind}</span></div>`
}

const Navigator = new Lure.Content ({
    Name: `Navigator`,
    Target: `.body`,
    Content: `<div class="navigator">${resultString}</div>`
});

module.exports = Navigator;