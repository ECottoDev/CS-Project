/**
* NavigationBar.js
*
* @author Edwin Cotto <cottosoftwaredevelopment@gmail.com>
* @copyright Edwin Cotto, All rights reserved.
*
* @version 2024-March-20 initial version
*/

import { addClasses, addEvent, appendChildren, createButton, createElementContainer, createImgButton } from "../../helpers/basicElements/basicElements.js";
import { routes } from "../../helpers/routes.js";

export class NavigationBar {
    constructor(parentProps) {
        this.parentProps = parentProps;
        this.view = addClasses(createElementContainer(), 'navigationBar_view');
        this.setView();
    }
    setView() {
        appendChildren(this.view, [
            addEvent(addClasses(createImgButton('frontEnd/assets/images/polytechnicLogo.png', { title: 'PUPR Logo' }), 'navigationBar_logo'), () => { this.parentProps.setNavState(routes.HOME_VIEW) }),
            addEvent(addClasses(createImgButton('frontEnd/assets/images/PUPRLogo.png', { title: 'PUPR Logo' }), 'navigationBar_puprLogo'), () => { this.parentProps.setNavState(routes.sec_view) }),
        ]);
    }
}