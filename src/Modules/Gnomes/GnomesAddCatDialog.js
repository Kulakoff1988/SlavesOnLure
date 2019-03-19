const Categories = require('../../Data/Categories');

const AddCatDialog = new Lure.Content ({
    Name: `AddCatDialog`,
    Dialog: true,
    Target: `.forDialog`,
    Parent: Gnomes,
    Route: false,
    Dialog: {WrapperHandle: false},
    Control: {
        Target: `#addCat`
    },
    Content:    `<div class="addCatDialog">
                    <div class="title">Add custom category</div>
                    <form>
                        <div>
                            <label>Enter category </label><input type="text" id="catName">
                        </div>
                        <div>
                            <label>Enter Color </label><input type="color" id="catColor">
                        </div>
                    </form>
                    <div class="buttons">
                        <button class="l-button btn-cancel"><img src="./img/icon-cancel.png"></button>
                        <button class="l-button btn-submit"><img src="./img/icon-ok.png"></button>
                    </div>
                </div>`
});

module.exports = AddCatDialog;