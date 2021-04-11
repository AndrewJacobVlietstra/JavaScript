let sumCheckMark = 0;

function camelCase(word) {
    const lowerWord = word.toLowerCase();
    const replaceUnderscores = lowerWord.replace('_', ' ');
    const firstWord = replaceUnderscores.slice(0, replaceUnderscores.indexOf(' '));
    const secondWord = (replaceUnderscores[replaceUnderscores.lastIndexOf(' ') + 1].toUpperCase()) + (replaceUnderscores.slice(replaceUnderscores.lastIndexOf(' ') + 2));

    sumCheckMark += 1;

    const output = firstWord + secondWord;
    return console.log(`${output.padEnd(20)} ${'✅'.repeat(sumCheckMark)}`);
}

camelCase('tESt_vaRiaBle');
camelCase('hellO_thERE');
camelCase('suM_variABle');
camelCase('calculaTE_AGE');
camelCase('delAYEd_deparTUrE');