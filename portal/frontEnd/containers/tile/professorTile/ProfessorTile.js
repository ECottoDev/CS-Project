/**
* ProfessorTile.js
* todo: change to gildo
* @author Edwin Cotto <cottosoftwaredevelopment@gmail.com>
* @copyright Edwin Cotto, All rights reserved.
*
* @version 2024-March-20 initial version
*/

import { addClasses, addEvent, appendChildren, createTileContainer } from "../../../helpers/basicElements/basicElements";

export class ProfessorTile {
    constructor(parentProps) {
        this.parentProps = parentProps;
        this.view = createTileContainer();
        this.setView();
    }
    setView() {
        appendChildren(this.view, [])
    }
}