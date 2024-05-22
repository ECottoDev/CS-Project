/**
* ProfessorTile.js
* @author Gildo Colon <terminator09763@gmail.com>
* @copyright Gildo Colon, All rights reserved.
*
* @version 2024-March-20 initial version
*/

import { addClasses, appendChildren, createElementContainer, createHeadingText, createImg, createTileContainer, toTitleCase } from "../../../helpers/basicElements/basicElements.js";

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
                appendChildren(addClasses(createElementContainer(), 'professorTile_name'), [
                    addClasses(createHeadingText(toTitleCase(this.professorData.first_name)), 'professorTile_firstName'),
                    addClasses(createHeadingText(toTitleCase(this.professorData.last_name)), 'professorTile_lastName'),
                ]),
                addClasses(createHeadingText(this.professorData.email), 'professorTile_email'),
                addClasses(createHeadingText(this.professorData.position), 'professorTile_position'),
                addClasses(createHeadingText(this.professorData.department), 'professorTile_department'),
                addClasses(createHeadingText(this.professorData.degrees), 'professorTile_degrees')
            ]
            )
        ])
    }
}