const fs = require('fs');
const path = require('path');

function getAllComponentFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(function(file) {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllComponentFiles(path.join(dirPath, file), arrayOfFiles);
        } else if (file.endsWith('.js')) {
            arrayOfFiles.push(path.join(dirPath, file));
        }
    });

    return arrayOfFiles;
}

function extractStyleKeys(componentCode) {
    const styleKeys = [];
    const stylesRegex = /styles\.(\w+)/g;
    let match;
    while ((match = stylesRegex.exec(componentCode)) !== null) {
        styleKeys.push(match[1]);
    }
    return styleKeys;
}

function extractTopLevelKeys(stylesCode) {
    const topLevelStylesRegex = /^\s*(\w+)\s*:\s*{(?=[\s\S]*?})/gm;
    let match;
    const declaredStyles = [];

    while ((match = topLevelStylesRegex.exec(stylesCode)) !== null) {
        declaredStyles.push(match[1]);
    }

    return declaredStyles;
}

function checkUnusedStyles(componentCode) {
    const stylesDeclarationMatch = componentCode.match(/const styles\s*=\s*{([\s\S]*?})\s*;/);
    if (!stylesDeclarationMatch) {
        return [];
    }

    const stylesDeclaration = stylesDeclarationMatch[1];
    const declaredStyles = extractTopLevelKeys(stylesDeclaration);
    const usedStyles = extractStyleKeys(componentCode);
    return declaredStyles.filter(style => !usedStyles.includes(style));
}

function processFiles(directory) {
    const componentFiles = getAllComponentFiles(directory);

    componentFiles.forEach((filePath) => {
        const componentCode = fs.readFileSync(filePath, 'utf-8');
        const unusedStyles = checkUnusedStyles(componentCode);
        if (unusedStyles.length > 0) {
            console.log(`Unused styles in ${filePath}: ${unusedStyles.join(', ')}`);
        }
    });
}

// Replace this with the path to your components directory
const componentsDirectory = path.join(__dirname, '../src/');
processFiles(componentsDirectory);
