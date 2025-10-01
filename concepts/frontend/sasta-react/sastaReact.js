function createElementObject(type, attributes={}, childrenElem) {
    return {
        type,
        attributes,
        childrenElem
    }
}

function renderElement(elementObject, containerElement) {
    const elem = document.createElement(elementObject.type);
    for (const attrib in elementObject.attributes) {
        elem.setAttribute(attrib, elementObject.attributes[attrib]);
    }
    elem.innerHTML += elementObject.childrenElem;
    containerElement.appendChild(elem);
}

const root = document.getElementById('root');

// const elem1 = createElementObject('a', { href: 'https://google.com' }, 'Google');
// renderElement(elem1, root);
const speedDial = {
    "Google": "https://google.com",
    "YouTube": "https://youtube.com",
    "Gmail": "https://gmail.com",
    "GitHub": "https://github.com",
    "StackOverflow": "https://stackoverflow.com"
}

const header = createElementObject('header', {}, '<h1>My Speed Dial</h1>');
renderElement(header, root);

const elems = Object.keys(speedDial).map(name =>
    createElementObject('a', { href: speedDial[name], target: '_blank', style: 'display: block' }, name)
);
elems.forEach(elem => renderElement(elem, root));
