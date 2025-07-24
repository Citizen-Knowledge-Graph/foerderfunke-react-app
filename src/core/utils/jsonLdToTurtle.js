import jsonld from "jsonld";
import { Parser, Writer } from "n3";

async function jsonLdToTurtle(doc) {
    const nquads = await jsonld.toRDF(doc, { format: "application/n-quads" });
    const parser = new Parser();
    const quads = parser.parse(nquads);

    const rawCtx = doc["@context"] || {};
    const prefixes = Object.entries(rawCtx).reduce((acc, [term, def]) => {
        if (typeof def === "string") {
            acc[term] = def;
        } else if (def && def["@id"]) {
            acc[term] = def["@id"];
        }
        return acc;
    }, {});

    const writer = new Writer({ prefixes });
    return new Promise((resolve, reject) => {
        writer.addQuads(quads);
        writer.end((err, turtle) => {
            if (err) reject(err);
            else resolve(turtle);
        });
    });
}

export default jsonLdToTurtle;