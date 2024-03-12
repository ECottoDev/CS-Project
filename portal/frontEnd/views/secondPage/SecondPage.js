/**
* SecondPage.js
*
* @author Edwin Cotto <cottosoftwaredevelopment@gmail.com>
* @copyright Edwin Cotto, All rights reserved.
*
* @version 2024-March-11 initial version
*/

import { appendChildren, createElementContainer, createHeadingText } from "../../helpers/basicElements/basicElements.js";

export class SecondPage {
    constructor(parentProps) {
        this.parentProps = parentProps;
        this.view = createElementContainer();
        this.setView();
    }
    setView() {
        appendChildren(this.view, [
            createHeadingText('Second Page')
        ])
    }
}