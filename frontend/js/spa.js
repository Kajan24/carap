'use strict'

export function newLink(event) {
    event.preventDefault();
    let url = new URL(event.target.href);
    let path = url.pathname.substring(1);
    showView(path);
}

/**
 * show only the correct view
 * @param {String} viewName - the name of the view
 */
export function showView(viewName) {
    // get all views and the view to change 
    const views = document.querySelectorAll(`.appView`);
    const viewToChange = document.querySelector(`#${viewName}`);

    // verify the view id
    if (viewToChange === null) {
        throw new Error(`the view : '${viewName}' does not exist`);
    }

    // set the display of the views to none contary to the view id for changing is set to original
    for (const view of views) {
        view.style.display = (viewToChange.id === view.id) ? 'flex' : 'none';
    }
}
