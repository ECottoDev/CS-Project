/**
* ProfessorBiography.js
*
* @author Edwin Cotto <cottosoftwaredevelopment@gmail.com>
* @copyright Edwin Cotto, All rights reserved.
*
* @version 2024-April-29 initial version
*/

import { addClasses, addEvent, appendChildren, createButton, createElementContainer, createHeadingText, createImg, createPillBox } from "../../helpers/basicElements/basicElements.js";

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
                addClasses(createHeadingText(this.professorData.professorName), 'professorTile_name'),
                addClasses(createHeadingText(this.professorData.professorEmail), 'professorTile_email'),
                addClasses(createHeadingText(this.professorData.professorOffice), 'professorTile_office'),
                addClasses(createHeadingText(this.professorData.professorOfficeHours), 'professorTile_officeHours')]
            ),
            addEvent(createButton('close'), () => { this.close() })
        ])
    }
}