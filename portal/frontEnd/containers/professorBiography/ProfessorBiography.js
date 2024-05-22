/**
* ProfessorBiography.js
*
* @author Edwin Cotto <cottosoftwaredevelopment@gmail.com>
* @copyright Edwin Cotto, All rights reserved.
*
* @version 2024-April-29 initial version
*/

import { addClasses, addEvent, appendChildren, createButton, createElementContainer, createHeadingText, createImg, createPillBox, toTitleCase } from "../../helpers/basicElements/basicElements.js";

export class ProfessorBiography {
    constructor(parentProps, professorData, close = () => { }) {
        this.parentProps = parentProps;
        this.professorData = professorData;
        this.close = close;
        this.view = addClasses(createPillBox(), 'professorBiography_view');
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
            ]),
            addEvent(createButton('close'), () => { this.close() })
        ])
    }
}