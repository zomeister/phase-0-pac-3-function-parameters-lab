function introduction(name) {
    return `Hi, my name is ${name}.`;
};

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};

function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};

/* NOTE:
    When doing string interpolation, must use `` characters
    instead of '' or "", for some reason, find out why and
    write it down somewhere
*/