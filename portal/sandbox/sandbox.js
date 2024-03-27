/**
* ProfessorTile.js
* todo: change to gildo
* @author Gildo Colon <terminator09763@gmail.com>
* @copyright Gildo Colon, All rights reserved.
*
* @version 2024-March-20 initial version
*/

import { addClasses, addEvent, appendChildren, createTileContainer } from "../../../helpers/basicElements/basicElements";
import { createHeadingText, createImg } from "../frontEnd/helpers/basicElements/basicElements";

export class ProfessorTile {
    constructor(parentProps) {
        this.parentProps = parentProps;
        this.view = createTileContainer();
        this.setView();
    }
    setView() {
        appendChildren(this.view, [
            this.professorinfo.image 
            createImg(this.Professorinfo.image) 
            createHeadingText(this.professorinfo.fullname)
        ])
    }
}