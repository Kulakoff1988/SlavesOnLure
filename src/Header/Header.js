const menuList = require('../Data/HeaderMenuList');

const Header = new Lure.Content ({
    Name: `Header`,
    Target: `.headerContainer`,
    Content:    `<div class="header">
                    <div id='cssmenu'>
                        <ul id="targetForDropDown">
                        </ul>
                    </div>
                </div>`,
    // ControllerConfig: {
    //     Target: `#targetForDropDown`,
    //     Data: menuList,
    //     ListElement:    `<li class='has-sub '><a href='#'>{{Name}}</a>
    //                               <ul>
    //                               {{#each SubMenu}}
    //                                 <li class='has-sub '><a href='#'>{{Name}}</a>
    //                                     <ul>
    //                                         {{#each SubMenu}}
    //                                             <li><a href='#'>{{Name}}</a></li>
    //                                         {{#endeach}}
    //                                     </ul>
    //                               {{#endeach}}
    //                               </ul>
    //                            </li>`
    // },

    // Controller: {
    //     TreeBuilder: new Lure.Controller.TreeBuilder ({
    //         Target: `.menuButtons`,
    //         Content: ``,
    //         ListElement: `<div class="headerButtons" id="headerButton1">
    //                         <div class="buttonName">{{Name}}</div>
    //                     </div>`,
    //         Data: menuList,
    //         Drop: true
    //     })
    // },
});

// const content1 = require('./Button-1-connent');
// const content2 = require('./Button-2-connent');
// const content3 = require('./Button-3-connent');
module.exports = Header;