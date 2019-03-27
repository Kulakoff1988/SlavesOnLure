const   checkList = require('../Data/CheckBoxList'),

        childrenCheckBoxes = element => {
            const inputs = [];
            console.log(element.closest(`div`).closest(`.checkBox`))
            const divs = element.closest(`div`).closest(`.checkBox`).querySelectorAll('.inputContainer');
            for (let div of divs) {
                inputs.push(div.querySelector('input'));
            }
            return inputs;
        },

        closestInputParent = element => {
            if (!!element.closest(`label`)) {
                return element.closest(`label`).closest(`div`).parentNode.querySelector(`label`).querySelector(`input`);
            }
        },

        styleForChildrenInputs = (element, style) => {
            Array.from(element.closest(`div`).children)
                .filter(el => el !== element.closest(`div`).firstElementChild)
                .map(el => el.style.display = style);
        },

        parentStatus = element => {
            if (element.closest(`label`).closest(`div`).parentNode.id !== `targetForCheckingBox`) {
                if (childrenCheckBoxes(closestInputParent(element)).every(input => input.checked === true)) {
                    closestInputParent(element).indeterminate = false;
                    closestInputParent(element).checked = true;
                    return parentStatus(closestInputParent(element));
                }
                else if (childrenCheckBoxes(closestInputParent(element)).some(input => input.checked === true)) {
                    closestInputParent(element).indeterminate = true;
                    return parentStatus(closestInputParent(element));
                }
                else {
                    closestInputParent(element).indeterminate = false;
                    closestInputParent(element).checked = false;
                    parentStatus(closestInputParent(element));
                }
            }
            else if (element.closest(`label`).closest(`div`).parentNode.id === `targetForCheckingBox`) {
                if (!element.checked && !element.indeterminate) {
                }
                if (childrenCheckBoxes(element).every(input => input.checked === true)) {
                    element.indeterminate = false;
                    element.checked = true;
                }
                else if (childrenCheckBoxes(element).some(input => input.checked === true)) {
                    element.indeterminate = true;
                }
                else {
                    element.indeterminate = false;
                    element.checked = false;
                    childrenCheckBoxes(element).map(input => input.checked = false);
                }
            }
        },

        changeHandler = element => {
            childrenCheckBoxes(element).map(input => {
                input.indeterminate = false;
                input.checked = element.checked;
            });
            parentStatus(element);
        };

const CheckingBox = new Lure.Content ({
    Name: `CheckingBox`,
    Target: `.body`,
    Content:    `<div class="checkingBox">
                    <div id="targetForCheckingBox"></div>
                </div>`,
    ControllerConfig: {
        Target: `#targetForCheckingBox`,
        Data: checkList,
        ListElement:    `<div class="checkBox"  indeterminate>
                            <div>
                                <label>
                                    <input type="checkbox">
                                    <span>{{Name}}</span>
                                </label>
                            <div class="dropDown"><img src="./img/icon-minus.png"></div>
                            </div>
                            {{#each Children}}
                            <div class="inputContainer">
                                <label>
                                    <input type="checkbox">
                                    <span>{{Name}}</span>
                                    <div class="dropDown"></div>
                                </label>
                                {{#each Children}}
                                <div class="inputContainer">
                                    <label>
                                        <input type="checkbox">
                                        <span>{{Name}}</span>
                                        <div class="dropDown"></div>
                                    </label>
                                    {{#each Children}}
                                    <div class="inputContainer">
                                        <label>
                                            <input type="checkbox">
                                            <span>{{Name}}</span>
                                            <div class="dropDown"></div>
                                        </label>
                                    </div>
                                    {{#endeach}}
                                </div>
                                {{#endeach}}
                            </div>
                            {{#endeach}}
                        </div>`
    },

    AfterBuild() {
        this._InputButtons = this.SelectAll('input');
        for (let input of this._InputButtons) {
            input.onchange = () => {
                changeHandler(input);
            };
        }
        this._ViewButtons = this.SelectAll('img');
        for (let button of this._ViewButtons) {
            styleForChildrenInputs(button, `none`);
        }
    }
});

module.exports = CheckingBox;