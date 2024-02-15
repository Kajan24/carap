'use strict'

/**
 * Pour récuperer une classe
 * @param {Number} id 
 * @returns 
 */
async function readOne(id) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myInit = {
        method: 'GET',
        header: myHeaders,
        mode: 'cors',
        cache: 'no-cache',
    };

    let response = await fetch(`../api/brand/index.php?id=${id}`, myInit)

    if (response.ok) {
        return response.text();
    } else {
        throw new error("Le fetch n'est pas passsé");
    }
}

/**
 * Pour récupérer toutes les classes
 * @returns 
 */
async function readAll() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'no-cache',
    };

    let response = await fetch('../api/brand/index.php', myInit);
    if (response.ok) {
        const text = await response.text();
        return text;
    } else {
        throw new Error("Le fetch n'est pas passé");
    }
}

export { readOne, readAll }

