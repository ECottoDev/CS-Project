/**
* ProfessorTile.js
* @author Gildo Colon <terminator09763@gmail.com>
* @copyright Gildo Colon, All rights reserved.
*
* @version 2024-March-20 initial version
*/

import { addClasses, appendChildren, createElementContainer, createHeadingText, createImg, createTileContainer } from "../../../helpers/basicElements/basicElements.js";

export class ProfessorTile {
    constructor(parentProps, professorData) {
        this.parentProps = parentProps;
        this.professorData = professorData;
        this.view = addClasses(createTileContainer(), 'professorTile_view');
        this.setView();
    }
    setView() {
        appendChildren(this.view, [
            addClasses(createImg("/frontEnd/assets/images/ProfessorTile.png", "professor image"), 'professorTile_image'),
            appendChildren(addClasses(createElementContainer(), 'professorTile_info'), [
                addClasses(createHeadingText(this.professorData.professorName), 'professorTile_name'),
                addClasses(createHeadingText(this.professorData.professorEmail), 'professorTile_email'),
                addClasses(createHeadingText(this.professorData.professorOffice), 'professorTile_office'),
                addClasses(createHeadingText(this.professorData.professorOfficeHours), 'professorTile_officeHours')]
            )
        ])
    }
}