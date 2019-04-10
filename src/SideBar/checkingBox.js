const   selectList = require('../Data/SelectList'),
        statusPaths = {
            connected: "./img/icon-connected.png",
            attention: "./img/icon-attention.png",
            stop: "./img/icon-stop.png"
        },
        statusDictionary = {
            1: statusPaths.connected,
            2: statusPaths.attention,
            3: statusPaths.stop
        },
        imgPaths = {
            Hide: `./img/icon-dropDownBorder.png`,
            Show: `./img/icon-dropDownBorderWhite.png`
        },
        objectStats = string => {
            return string.split(', ')
        };

addBranch = tree => {
    if (!tree) return ``;
    return tree.reduce((acc, item) => {
        return acc + `<div class="containerForChecking" ${item.Children ? `data-children="true"` : ``}>
                        <div class="forLabel l-button" data-objectdata="${item.Name}, ${item.ID}">
                            <div class="status" data-status="1">
                               <img src=${statusPaths.connected}>
                            </div>
                            <div class="flex-100 desktop">${item.Name}</div>
                            <div class="flex-100 tab">${item.Title}</div>
                            <div class="hideImg">
                               ${item.Children ? `<img src=${imgPaths.Hide} data-type="1" class="hide">` : ``}
                            </div>
                        </div>
                     <div class="nextCheckbox hidden" style="padding-left: 10px">${addBranch(item.Children)}</div>
                     </div>`}, ``);
};

const CheckingBox = new Lure.Content ({
    Name: `CheckingBox`,
    Target: `.body`,
    Content:    `<div id="checkingBox"></div>`,
    State: {
        Tree: selectList
    },

    GetSet: {
        get Tree() {
            return this.State.Tree;
        },
        set Tree(tree) {
            this.State.Tree = tree;
            this.Content.innerHTML = addBranch(tree);
            this._TreeHandler();
        }
    },

    Methods() {
        this._ShowLevelIcon = parent => {
            return parent.querySelector(`.hideImg`).querySelector(`img`);
        };

        this.GetEquipStatus = function (status) {
            DataDash.ViewStatus(status);
            FeaturesButtons.ViewStatus(status);
        };
    },

    AfterBuild() {
        this.Content.innerHTML = addBranch(this.State.Tree);
        this.AddEventListener(`click`, `.l-button`, (e) => {
            const currentButton = e.currentTarget;
            const handlerIcon = this._ShowLevelIcon(currentButton);
            if (handlerIcon) {
                handlerIcon.classList.toggle(`show`);
                handlerIcon.classList.toggle(`hide`);
            }
            const toggleElements = currentButton.parentNode.querySelector(`.nextCheckbox`);
            const siblingToHide = currentButton.parentNode.parentNode.children;
            for (let sibling of siblingToHide) {
                const siblingIcon = this._ShowLevelIcon(sibling);
                if (sibling.querySelector(`.l-button`) !== currentButton && sibling.dataset[`children`] && siblingIcon.dataset[`type`] === `2`) {
                    sibling.querySelector(`.nextCheckbox`).classList.remove(`visible`);
                    siblingIcon.dataset[`type`] = `1`;
                    siblingIcon.src = imgPaths.Hide;
                    siblingIcon.classList.toggle(`show`);
                    siblingIcon.classList.toggle(`hide`);
                }
            }
            if (handlerIcon) {
                if (handlerIcon.dataset[`type`] === `1`) {
                    handlerIcon.dataset[`type`] = 2;
                    handlerIcon.src = imgPaths.Show;
                    currentButton.classList.add(`showColorParent`);
                    toggleElements.classList.add(`visible`);
                    for (let child of toggleElements.children) {
                        child.querySelector(`.forLabel`).classList.add(`showColorChildren`);
                    }
                    for (let sibling of siblingToHide) {
                        if (sibling.parentNode !== this.Content) {
                            sibling.querySelector(`.forLabel`).classList.add(`showColorParent`);
                        }
                    }
                }
                else {
                    handlerIcon.dataset[`type`] = 1;
                    handlerIcon.src = imgPaths.Hide;
                    for (let sibling of siblingToHide) {
                        sibling.querySelector(`.forLabel`).classList.remove(`showColorParent`);
                    }
                    for (let child of toggleElements.children) {
                        child.classList.remove(`showColorChildren`);
                    }
                    toggleElements.classList.remove(`visible`);
                }
            }
            const status = {
                equipName: objectStats(currentButton.dataset[`objectdata`])[0],
                equipStatus: statusDictionary[currentButton.querySelector(`.status`).dataset[`status`]],
                equipID: objectStats(currentButton.dataset[`objectdata`])[1]
            };
            this.GetEquipStatus(status);
        });
    }
});

window.CheckingBox = CheckingBox;
module.exports = CheckingBox;