/**
* FirstPage.js
*
* @author Edwin Cotto <cottosoftwaredevelopment@gmail.com>
* @copyright Edwin Cotto, All rights reserved.
*
* @version 2024-March-11 initial version
*/

import { addEvent, appendChildren, createButton, createElementContainer, createHeadingText } from "../../helpers/basicElements/basicElements.js";

export class FirstPage {
    constructor(parentProps) {
        this.parentProps = parentProps;
        this.view = createElementContainer();
        this.setView();
    }
    setView() {
        appendChildren(this.view, [
            createHeadingText('First Page')
        ]);
    }
}