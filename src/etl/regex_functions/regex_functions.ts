
const splitByNewLine = (multipleLineText:string):Array<string> => {
    const everyNewOrEmptyLine : RegExp = /\n+\s{0,}/gm;
    return multipleLineText.split(everyNewOrEmptyLine);
}

const linesToArrayOfValues = (arrayOfLines:Array<string>):Array<Array<string>>=>{ 
    return arrayOfLines.map(singleLine => splitByDoubleWhiteSpac(singleLine))
}

const splitByDoubleWhiteSpac = (oneLineString:string):Array<string> => {
    const doubleWhiteSpac : RegExp = /\s{2,}|\s{1,}\d/;
    return oneLineString.split(doubleWhiteSpac);
}

const removeDots = (value: string) : string => value.replace(/\./g,"")

const removeTheD = (value: string) : string => value.replace(/D|C/,"")

const replaceCommaWithDot = (value: string) : string => value.replace(/,/g,".")

const filterSingleDC = (line:Array<string>):Array<string> => line.filter(value => value!=='D'&&value!=='C')

export {splitByNewLine, linesToArrayOfValues ,  removeDots , removeTheD, replaceCommaWithDot, filterSingleDC }