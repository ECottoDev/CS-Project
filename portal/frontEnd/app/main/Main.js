/**
* Main.js
*
* @author Edwin Cotto <cottosoftwaredevelopment@gmail.com>
* @copyright Edwin Cotto, All rights reserved.
*
* @version 2024-March-11 initial version
*/

import { DisplayBox } from "../../components/displayBox/DisplayBox.js";
import { routes } from "../../helpers/routes.js";
import { addClasses, addEvent, appendChildren, createButton, createElementContainer, createSVGButton, createScrollArea, detachChildren, getURLParam, navigate, parseRequestURL } from "../../helpers/basicElements/basicElements.js";
import { FirstPage } from "../../views/firstPage/FirstPage.js";
import { SecondPage } from "../../views/secondPage/SecondPage.js";

window.onload = async () => { appendChildren(document.getElementById('root'), [new Main().view]); }

export class Main {
    constructor() {
        window.onhashchange = () => { this.setNavState() };
        const root = document.getElementById('root');
        this.displayBox = new DisplayBox(root);
        this.setNavObj();
        this.setAppProps();
        this.container = addClasses(createScrollArea(), 'main_container');
        this.view = addClasses(createElementContainer(), 'main_view');
        this.setView();
    }
    setAppProps() {
        const root = document.getElementById('root');
        //if any problems arise with the appProps, add {}, before the swirly brackets
        this.appProps = Object.assign({
            displayBox: this.displayBox.display,
            setNavState: this.setNavState.bind(this),
            showMsg: () => { console.log('display showMessage'); }
        });
    }
    async setView() {
        appendChildren(detachChildren(this.view), [
            appendChildren(addClasses(createElementContainer(), 'index_navBarContainer'), [
                addEvent(createButton('Home'), () => { this.setNavState(routes.sec_view); }),
            ]),
            this.container,
        ]);
        this.setNavState(this.navState, this.setParams());
    }
    /**
     * helps to set the navigation object and move from pages
     */
    setNavObj() {
        this.navigation = {
            [routes.HOME_VIEW]: () => new FirstPage(this.appProps).view,
            [routes.sec_view]: () => new SecondPage(this.appProps).view,
        }
    }
    /**
     * helps to direct the user to another page
     * @param {*} hash 
     * @param {*} params (default = false) 
     */
    async setNavState(hash = '', params = false) {
        hash && navigate(hash, params);
        this.navState = parseRequestURL().split('?')[0];
        if (this.navState == '' || this.navState == '#/' || this.navState == '/' || !this.navigation[this.navState]) {
            this.navState = routes.HOME_VIEW;
            navigate(this.navState);
        }
        const navView = this.navigation[this.navState] ? this.navigation[this.navState]() : false;
        (navView && this.navigation[this.navState]) && appendChildren(detachChildren(this.container), navView);
    }
    /**
     * helps to get the params to the url
     */
    setParams() {
        const URLParams = getURLParam();
        return URLParams.success ? URLParams.urlParam : false;
    }
}
