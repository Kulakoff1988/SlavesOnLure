const   checkList = require('../Data/CheckBoxList'),
        selectList = require('../Data/SelectList');

        addBranch = (tree, marginLeft = 0) => {
            if (!tree) return ``;
            return html = tree.reduce((acc, item) => {
                return acc +    `<div class="containerForChecking" style="margin-left: ${marginLeft}px">
                                    <div class="forLabel">
                                        <label>
                                            <input type="checkbox">
                                            <span>${item.Name}</span>
                                        </label>
                                        <div class="hideImg">
                                        ${item.Children ? '<img src="./img/icon-minus.png" data-type="1" class="l-button">' : ``}
                                        </div>
                                    </div>
                                    <div class="nextCheckbox">${addBranch(item.Children, marginLeft + 5)}</div>
                                </div>`}, ``);
        };

        childrenCheckboxes = element => {
            const inputs = element.closest(`.forLabel`).closest(`.containerForChecking`).querySelector('.nextCheckbox').querySelectorAll(`input`);
            return Array.from(inputs);
        };

        closestInputParent = element => {
            if (!!element.closest(`label`)) {
                return element.closest(`label`).closest(`div`).parentNode.parentNode.parentNode.querySelector(`label`).querySelector(`input`);
            }
        };

        parentStatus = element => {
            if (element.parentNode.parentNode.parentNode.parentNode.id === `checkingBox`) {
                if (childrenCheckboxes(element).every(input => input.checked === true)) {
                    element.indeterminate = false;
                    element.checked = true;
                }
                else if (childrenCheckboxes(element).some(input => input.checked === true)) {
                    element.indeterminate = true;
                }
                else {
                    element.indeterminate = false;
                    element.checked = false;
                }
            }
            else {
                if (childrenCheckboxes(closestInputParent(element)).every(input => input.checked === true)) {
                    closestInputParent(element).indeterminate = false;
                    closestInputParent(element).checked = true;
                    return parentStatus(closestInputParent(element));
                }
                else if (childrenCheckboxes(closestInputParent(element)).some(input => input.checked === true)) {
                    closestInputParent(element).indeterminate = true;
                    return parentStatus(closestInputParent(element));
                }
                closestInputParent(element).indeterminate = false;
                closestInputParent(element).checked = false;
                parentStatus(closestInputParent(element));
            }
        };

        changeHandler = element => {
            childrenCheckboxes(element).map(input => {
                input.indeterminate = false;
                input.checked = element.checked;
            });
            parentStatus(element);
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
            this._InputButtons = this.SelectAll('input');
            for (let input of this._InputButtons) {
                input.onchange = () => {
                    changeHandler(input);
                };
            }
            this._ShowHandler = this.SelectAll(`img`);
            for (let button of this._ShowHandler) {
                button.addEventListener(`click`, () => {
                    const elementsToHide = button.parentNode.parentNode.parentNode.querySelector(`.nextCheckbox`);
                    if (button.dataset[`type`] === `1`) {
                        button.dataset[`type`] = 2;
                        button.src = `./img/icon-plus.png`;
                    }
                    else {
                        button.dataset[`type`] = 1;
                        button.src = `./img/icon-minus.png`;
                    }
                    elementsToHide.style.display = elementsToHide.style.display === `none` ? `block` : `none`;
                });
            }
        };
    },

    AfterBuild() {
        this.Content.innerHTML = addBranch(this.State.Tree);
        this._TreeHandler();
    }
});

window.CheckingBox = CheckingBox;
module.exports = CheckingBox;