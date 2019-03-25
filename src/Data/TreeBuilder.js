const   regexForTemplate = new RegExp('\\b\\w+\\b(?=%)', 'g');

        // menuTitle = (menuList, template) => {
        //     const words = template.match(regexForTemplate);
        //     for (let word of words) {
        //         if (!user.hasOwnProperty(word)) user[word] = `Not specified`;
        //     }
        //     return user;
        // };

class TreeBuilder {
    constructor ({
                     Target = null,
                     Data = [],
                     Template = ``,
                     Control = null
                 })
     {
        this.Target = document.querySelector(Target);
        this.Data = Data;
        this.Template = Template;
        if (!Control) {

        }
        if (typeof Control === `string`) {
            this.Control = document.querySelector(Control);
        }

        this._elementRender(this.Data[0].Name, this.Target)
    }

    _elementRender(itemName, target) {
        const currentElement = document.createElement('div');
        currentElement.innerText = itemName;
        target.appendChild(currentElement);
        return target;
    }
}

module.exports = TreeBuilder;