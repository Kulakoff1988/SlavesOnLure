// const   selectList = require('../Data/SelectList'),
const   statusPaths = {
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
    // State: {
    //     Tree: selectList()
    // },

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

    LoadTarget: ``,

    AfterBuild() {
        this.Load.Show();
        api.Devisces_Get(-1, {
            Then: res => {
                const data = [{
                    Name: `Библиотека №1`,
                    ID: `Lib`,
                    Title: `Б-№1`,
                    Children: [
                        {
                            Name: `Ридеры/Планшеты`,
                            ID: `Reader`,
                            Title: `Rd/Tb`,
                            Children: [
                                {
                                    Name: res[0].Name,
                                    Title: `Pnt1`,
                                    ID: res[0].ID
                                },
                                {
                                    Name: res[1].Name,
                                    Title: `Pnt2`,
                                    ID: res[1].ID
                                }
                            ]
                        },
                        {
                            Name: `ПКС-ворота`,
                            ID: `Gates`,
                            Title: `Gts`,
                            Children: [
                                {
                                    Name: `Ворота-1`,
                                    Title: `Gts1`,
                                    ID: 1
                                },
                                {
                                    Name: `Ворота-2`,
                                    Title: `Gts2`,
                                    ID: 2
                                }
                            ]
                        },
                        {
                            Name: `Станции самостоятельного обслуживания`,
                            ID: `SSS`,
                            Title: `SSS`,
                            Children: [
                                {
                                    Name: `ССО-1`,
                                    Title: `SSS1`,
                                    ID: 1
                                },
                                {
                                    Name: `CCО-2`,
                                    Title: `SSS2`,
                                    ID: 2
                                }
                            ]
                        },
                        {
                            Name: `Станции самостоятельного возврата`,
                            ID: `SRS`,
                            Title: `SRS`,
                            Children: [
                                {
                                    Name: `ССВ-1`,
                                    Title: `SRS1`,
                                    ID: 1
                                },
                                {
                                    Name: `CCВ-2`,
                                    Title: `SRS2`,
                                    ID: 2
                                }
                            ]
                        },
                        {
                            Name: `Станции SMART-BOX`,
                            ID: `SBX`,
                            Title: `SMB`,
                            Children: [
                                {
                                    Name: `С-SMB-1`,
                                    Title: `SMB1`,
                                    ID: 1
                                },
                                {
                                    Name: `C-SMB-2`,
                                    Title: `SMB2`,
                                    ID: 2
                                }
                            ]
                        },
                        {
                            Name: `Умные полки`,
                            ID: `SmartShelf`,
                            Title: `SS`,
                            Children: [
                                {
                                    Name: `УП-1`,
                                    Title: `SS1`,
                                    ID: 1
                                },
                                {
                                    Name: `УП-2`,
                                    Title: `SS2`,
                                    ID: 2
                                }
                            ]
                        }]
                },
                    {
                        Name: `Библиотека №2`,
                        ID: `Lib`,
                        Title: `Б-№2`,
                        Children: [
                            {
                                Name: `Ридеры/Планшеты`,
                                ID: `Reader`,
                                Title: `Rd/Tb`,
                                Children: [
                                    {
                                        Name: `Точка-1`,
                                        Title: `Pnt1`,
                                        ID: 1
                                    },
                                    {
                                        Name: `Точка-2`,
                                        Title: `Pnt2`,
                                        ID: 2
                                    }
                                ]
                            },
                            {
                                Name: `ПКС-ворота`,
                                ID: `Gates`,
                                Title: `Gts`,
                                Children: [
                                    {
                                        Name: `Ворота-1`,
                                        Title: `Gts1`,
                                        ID: 1
                                    },
                                    {
                                        Name: `Ворота-2`,
                                        Title: `Gts2`,
                                        ID: 2
                                    }
                                ]
                            },
                            {
                                Name: `Станции самостоятельного обслуживания`,
                                ID: `SSS`,
                                Title: `SSS`,
                                Children: [
                                    {
                                        Name: `ССО-1`,
                                        Title: `SSS1`,
                                        ID: 1
                                    },
                                    {
                                        Name: `CCО-2`,
                                        Title: `SSS2`,
                                        ID: 2
                                    }
                                ]
                            },
                            {
                                Name: `Станции самостоятельного возврата`,
                                ID: `SRS`,
                                Title: `SRS`,
                                Children: [
                                    {
                                        Name: `ССВ-1`,
                                        Title: `SRS1`,
                                        ID: 1
                                    },
                                    {
                                        Name: `CCВ-2`,
                                        Title: `SRS2`,
                                        ID: 2
                                    }
                                ]
                            },
                            {
                                Name: `Станции SMART-BOX`,
                                ID: `SBX`,
                                Title: `SMB`,
                                Children: [
                                    {
                                        Name: `С-SMB-1`,
                                        Title: `SMB1`,
                                        ID: 1
                                    },
                                    {
                                        Name: `C-SMB-2`,
                                        Title: `SMB2`,
                                        ID: 2
                                    }
                                ]
                            },
                            {
                                Name: `Умные полки`,
                                ID: `SmartShelf`,
                                Title: `SS`,
                                Children: [
                                    {
                                        Name: `УП-1`,
                                        Title: `SS1`,
                                        ID: 1
                                    },
                                    {
                                        Name: `УП-2`,
                                        Title: `SS2`,
                                        ID: 2
                                    }
                                ]
                            }]
                    }];
                this.Content.innerHTML = addBranch(data);
            }
        });

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