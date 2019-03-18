const PanelForElfs_1 = new Lure.Content ({
    Name: `PanelForElfs_1`,
    Type: `panelsForElfs`,
    Parent: Elfs,
    Visible: true,
    Control: {
        Target: `#elfsChoice-1`
    },
    Content: `<div class="panelsForElfs">
                <div class="targetForElfs"></div>
                <div class="formToAdd">
                        <div>
                            <label>
                                <b>Enter name:</b> <input type="text" placeholder="User name" id="nameForm" size="8">
                            </label>
                        </div>
                        <div>
                            <label>
                                <b>Enter age:</b> <input type="number" placeholder="User age" id="ageForm" min="18">
                        </label>
                        </div>
                        <div>
                            <label>
                                <b>Enter comment:</b> <input type="text" placeholder="User comment" id="commentForm" size="10">
                            </label>
                        </div>
                        <div>
                            <button class="btn-add l-button">Add</button>
                        </div>
                </div>
            </div>`,
    ControllerConfig: {
        Target: `.targetForElfs`,
        Data: [{Name: `Sara Conor`, Age: 40, Comment: `killer`}],
        EmptyMessage: `no items`,
        ListElement: `<div class="user-card">
                        <div class="template ">{{Name}}</div>
                        <div class="template editable" id="date-of-birth">{{Age}}</div>
                        <textarea class="template" id="textarea">{{Comment}}</textarea>
                        <button class="template btn-save l-button">Save</button>
                        <button class="template btn-remove l-button">Remove</button>
                    </div>`,
        PropTypes: {
            Age: Lure.PropTypes.UInt,
        },
    },
    

    Props() {
        this._NameForm = this.Select('#nameForm');
        this._AgeForm = this.Select('#ageForm');
        this._CommentForm = this.Select('#commentForm');
    },

    Methods() {
        this._AddUser = function(){
            this.Controller.Add({
                Name: this._NameForm.value,
                Age: +this._AgeForm.value,
                Comment: this._CommentForm.value
            });
        };
    },

    AfterBuild() {
        this.AddEventListener(`click`, '.btn-add', () => {
            this._AddUser();
        });
        this.AddEventListener(`click`, '.btn-remove', (e, p) => {
            this.Controller.Remove(p.LineID);
        });
        this.AddEventListener(`click`, `btn-save`, (e, p) => {
            this.Controller.Data[p.LineID].Comment = this._CommentForm.value;
        });
    }
})

module.exports = PanelForElfs_1;