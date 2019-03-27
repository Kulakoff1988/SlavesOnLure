const   selectList = require('../Data/SelectList'),

        removeInactive = (parent) => {
            while (parent.firstChild) {
                if (parent.firstChild.id === `selectBox`) return;
                parent.removeChild(parent.lastChild);
            }
        },

        addNest = (dataList, parent) => {
            const nextHtml = document.createElement(`div`);
            nextHtml.innerHTML = `<div>${dataList.Title}</div>
                                    <select>
                                        <option>--Choose--</option>
                                        ${dataList.Children.reduce((acc, item) => {
                                            return acc + `<option value="${item.ID}">${item.Name}</option>`;
                                            }, ``)}
                                    </select>
                                 <div class="nextSelect"></div> `;
            const   selectButtons = nextHtml.querySelector('select'),
                    parentNextSelect = nextHtml.querySelector('.nextSelect');
            parent.appendChild(nextHtml);
            selectButtons.onchange = () => {
                for (let select of selectButtons) {
                    if (select.selected === true) {
                        removeInactive(parentNextSelect);
                        const currentSelect = dataList.Children.find(el => el.ID === +select.value);
                        if (currentSelect.Children) {
                            addNest(currentSelect, parentNextSelect, select.value);
                        }
                    }
                }
            };
        };

const SelectBox = new Lure.Content ({
    Name: `SelectBox`,
    Target: `.body`,
    Content:    `<div id="selectBox"></div>`,

    AfterBuild() {
        addNest(selectList, this.Content);
    }
});

module.exports = SelectBox;