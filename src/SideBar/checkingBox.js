const   checkList = require('../Data/CheckBoxList'),
        selectList = require('../Data/SelectList'),
        statusPaths = {
            connected: "./img/icon-connected.png",
            attention: "./img/icon-attention.png",
            stop: "./img/icon-stop.png"
        },
        statusDictionary = {
            1: statusPaths.connected,
            2: statusPaths.attention,
            3: statusPaths.stop
        };

addBranch = tree => {
    if (!tree) return ``;
    return html = tree.reduce((acc, item) => {
        return acc +    `<div class="containerForChecking">
                                    <div class="forLabel">
                                        <div class="status" data-status="1">
                                            <img src=${statusPaths.connected}>
                                        </div>
                                        <label>
                                            <input type="checkbox">
                                            <span>${item.Name}</span>
                                        </label>
                                        <div class="hideImg">
                                            ${item.Children ? '<img src="./img/icon-dropdown.png" data-type="1" class="l-button hide">' : ``}
                                        </div>
                                    </div>
                                    <div class="nextCheckbox">${addBranch(item.Children)}</div>
                                </div>`}, ``);
};

const CheckingBox = new Lure.Content ({
    Name: `CheckingBox`,
    Target: `.body`,
    Content: `<div id="checkingBox"></div>`,
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
        this._TreeHandler = function () {
            this._ShowHandler = this.SelectAll(`.l-button`);
            for (let button of this._ShowHandler) {
                button.addEventListener(`click`, () => {
                    button.classList.toggle(`show`);
                    button.classList.toggle(`hide`);
                    const toggleElements = button.parentNode.parentNode.parentNode.querySelector(`.nextCheckbox`);
                    const siblingToHide = button.parentNode.parentNode.parentNode.parentNode.children;
                    for (let sibling of siblingToHide) {
                        if (sibling.querySelector(`.l-button`) !== button && !!sibling.querySelector(`.l-button`) && sibling.querySelector(`.l-button`).dataset[`type`] === `2`) {
                            sibling.querySelector(`.nextCheckbox`).classList.remove(`visible`);
                            sibling.querySelector(`.l-button`).dataset[`type`] = `1`;
                            sibling.querySelector(`.l-button`).classList.toggle(`show`);
                            sibling.querySelector(`.l-button`).classList.toggle(`hide`);
                            sibling.querySelector(`.forLabel`).classList.remove(`showColorParent`);
                        }
                    }
                    if (button.dataset[`type`] === `1`) {
                        button.dataset[`type`] = 2;
                        button.parentNode.parentNode.classList.add(`showColorParent`);
                        toggleElements.classList.add(`visible`);
                        for (let child of toggleElements.children) {
                            child.classList.add(`showColorChildren`);
                        }
                        for (let sibling of siblingToHide) {
                            if (sibling.parentNode !== this.Content) {
                                sibling.querySelector(`.forLabel`).classList.add(`showColorParent`);
                            }
                        }

                    }
                    else {
                        button.dataset[`type`] = 1;
                        for (let sibling of siblingToHide) {
                            sibling.querySelector(`.forLabel`).classList.remove(`showColorParent`);
                        }
                        for (let child of toggleElements.children) {
                            child.classList.remove(`showColorChildren`);
                        }
                        toggleElements.classList.remove(`visible`);
                    }
                    const status = {
                        equipName: button.parentNode.parentNode.querySelector(`span`).innerText,
                        equipStatus: statusDictionary[button.parentNode.parentNode.querySelector(`.status`).dataset[`status`]]
                    };
                    this.GetStatus(status);
                });
            }
        };

        this.GetStatus = function (status) {
            DataDash.ViewStatus(status);
        };
    },

    AfterBuild() {
        this.Content.innerHTML = addBranch(this.State.Tree);
        this._TreeHandler();
    }
});

window.CheckingBox = CheckingBox;
module.exports = CheckingBox;