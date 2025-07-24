import jsonld from "jsonld";
import { Parser, Writer } from "n3";

async function jsonLdToTurtle(doc) {
    // 1) Fully expand your JSON-LD (resolves context, turns compact terms into full IRIs, etc.)
    console.log("Original JSON-LD:", JSON.stringify(doc, null, 2));
    const expanded = await jsonld.expand(doc);
    console.log("Expanded JSON-LD:", JSON.stringify(expanded, null, 2));
  
    // 2) Convert the expanded JSON-LD to N-Quads
    const nquads = await jsonld.toRDF(expanded, { format: "application/n-quads" });
  
    // 3) Parse those N-Quads into quads
    const parser = new Parser();
    const quads = parser.parse(nquads);
  
    // 4) Reuse your original @context to declare prefixes in the Turtle
    const rawCtx = doc["@context"] || {};
    const prefixes = Object.entries(rawCtx).reduce((acc, [term, def]) => {
      if (typeof def === "string") {
        acc[term] = def;
      } else if (def && def["@id"]) {
        acc[term] = def["@id"];
      }
      return acc;
    }, {});
  
    // 5) Write Turtle with those prefixes
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