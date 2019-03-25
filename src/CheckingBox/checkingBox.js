const checkList = require('../Data/CheckBoxList');

const CheckingBox = new Lure.Content ({
    Name: `CheckingBox`,
    Target: `.body`,
    Content:    `<div class="checkingBox">
                    <div id="targetForCheckingBox"></div>
                </div>`,
    ControllerConfig: {
        Target: `#targetForCheckingBox`,
        Data: checkList,
        ListElement:    `<label>
                            <input type="checkbox">
                            <span class="pseudoCheckbox">{{Name}}</span>
                        </label>`,
    }
});

module.exports = CheckingBox;