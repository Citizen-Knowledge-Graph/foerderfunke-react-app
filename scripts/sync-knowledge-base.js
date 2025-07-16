const { existsSync } = require("fs");
const simpleGit = require("simple-git");
const path = require("path");

// for local development: npm run local
(async () => {
    const repoUrl = "https://github.com/Citizen-Knowledge-Graph/knowledge-base";
    const repoDir = path.resolve(__dirname, "..", "public", "knowledge-base");
    try {
        if (existsSync(repoDir)) {
            console.log("pulling from knowledge-base repository");
            await simpleGit(repoDir).pull();
        } else {
            console.log("cloning knowledge-base repository");
            await simpleGit().clone(repoUrl, repoDir);
        }
    } catch (err) {
        console.error("no internet connection or git error", err.message);
    }
})();
