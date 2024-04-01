/**
* ProfessorTile.js
* todo: change to gildo 
* @author Gildo Colon <terminator09763@gmail.com>
* @copyright Gildo Colon, All rights reserved.
*
* @version 2024-March-20 initial version
*/

import { addClasses, appendChildren, elementFromHTMLString, nodeElement, addAttributes, createElementContainer } from "../../../helpers/basicElements/basicElements";

export class ProfessorTile {
    constructor(professorInfo) {
        this.professorInfo = professorInfo;
        this.view = this.createTileContainer();
        this.setView();
    }
    setView() {
        const img = this.createImg(this.professorInfo.image);
        const heading = this.createHeadingText(this.professorInfo.fullname);
        appendChildren(this.view, [img, heading]);
    }

    createTileContainer({ hover = true, borders = ['all'] } = {}) {
        !Array.isArray(borders) && (borders = [borders]);
        return addClasses(createElementContainer(borders), 'tileContainer', hover && 'tileContainer-hover');
    }

    createHeadingText(str, { bold = false, title = false } = {}) {
        return addClasses(elementFromHTMLString(`<h1 title="${title ? title : str}">${str ? str : ''}</h1>`), 'header', bold && 'header-bold');
    }

    createImg(src, title = '') {
        return addAttributes(nodeElement('img'), { ...title ? { title, alt: title } : {}, src });
    }
}

export function createImgButton(imgFile, { ProfessorTile = false, hover = true } = {}) {
    const imgButton = addClasses(elementFromHTMLString(`<button ${ProfessorTile ? `ProfessorTile="${ProfessorTile}"` : ''}></button>`), 'imgButton', hover && 'imgButton-hover');
    const img = addClasses(createImg(imgFile));
    return appendChildren(imgButton, [img]);
}