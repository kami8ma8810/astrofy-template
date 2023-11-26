const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;
const XMLSerializer = require('xmldom').XMLSerializer;

const xmlContent = fs.readFileSync('input.xml', 'utf-8');
const doc = new DOMParser().parseFromString(xmlContent, 'text/xml');

const elementsToRemove = doc.getElementsByTagName('YOUR_TAG_NAME');
while (elementsToRemove.length > 0) {
    const element = elementsToRemove[0];
    element.parentNode.removeChild(element);
}

const updatedXml = new XMLSerializer().serializeToString(doc);
fs.writeFileSync('output.xml', updatedXml);

console.log('Finished removing tags.');
