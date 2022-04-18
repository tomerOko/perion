import { filterSingleDC, linesToArrayOfValues, removeDots, removeTheD, replaceCommaWithDot, splitByNewLine } from "../regex_functions/regex_functions"
import { readFileAsnc } from "../text_reader/text_reader"

const filesLocations = {
    task1 :  "/app/src/etl/inputs/input1.txt",
    task2 :  "/app/src/etl/inputs/input2.txt",
    task3 :  "/app/src/etl/inputs/input3.txt"
} 

type resultStracture = {
    description : string,
    classifier: string,
    openingBalance: number,
    debit: number
    credit: number
    finalBalance: number
    parent: null | string
}

const task1 = async(fileLocation = filesLocations.task1) =>{
    try {

        //load the file into object
        const fileAsString:string = await readFileAsnc(fileLocation)
        // console.log(fileAsString)

        //split the string to lines
        const fileAsRows:Array<string>= splitByNewLine(fileAsString)
        // console.log(fileAsRows)
    
        //split the rows to words by any 2+whitespace
        const fileAsArraysOfValues:Array<Array<string>>=linesToArrayOfValues(fileAsRows)
        // console.log(fileAsArraysOfValues)

        const result : Array<resultStracture> = fileAsArraysOfValues.map(transformToStructure).filter(line => line!=="") as Array<resultStracture>

        console.log(result)

    } catch (error) {
        //TODO: add error handling
    }
}

const task2 = async(fileLocation = filesLocations.task2) =>{
    
    try {

        //load the file into object
        const fileAsString:string = await readFileAsnc(fileLocation)
        // console.log(fileAsString)

        //split the string to lines
        const fileAsRows:Array<string>= splitByNewLine(fileAsString)
        // console.log(fileAsRows)
    
        //split the rows to words by any 2+whitespace
        const fileAsArraysOfValues:Array<Array<string>>=linesToArrayOfValues(fileAsRows)
        // console.log(fileAsArraysOfValues)

        const result : Array<resultStracture> = fileAsArraysOfValues.map(transformToStructure).filter(line => line!=="") as Array<resultStracture>

        console.log(result)

    } catch (error) {
        //TODO: add error handling
    }

}
filterSingleDC
const task3 = async (fileLocation = filesLocations.task3) =>{
    try {

        //load the file into object
        const fileAsString:string = await readFileAsnc(fileLocation)
        // console.log(fileAsString)

        //split the string to lines
        const fileAsRows:Array<string>= splitByNewLine(fileAsString)
        // console.log(fileAsRows)
    
        //split the rows to words by any 2+whitespace
        const fileAsArraysOfValues:Array<Array<string>>=linesToArrayOfValues(fileAsRows).map(valuesArray => filterSingleDC(valuesArray))
        // console.log(fileAsArraysOfValues)



        const result : Array<resultStracture> = fileAsArraysOfValues.map(transformToStructure).filter(line => line!=="") as Array<resultStracture>

        console.log(result)

    } catch (error) {
        //TODO: add error handling
    }


}


const transformToStructure = (line:Array<string>) => {
    try {
        const asResultStracture = valueArrayToResultStracture(line)
        return asResultStracture
    } catch (error) {
        console.log('\n',`line '${line}' was filtered out`,'\n',)
        console.log(error, '\n','\n',)
        return ""
    }
    }

const valueArrayToResultStracture = (values : Array<string>) : resultStracture => {

    const classifier = removeDots(values[0])
    const description:string = values[1]
    const openingBalance = parseNumbers(values[2])
    const debit = parseNumbers(values[3])
    const credit = parseNumbers(values[4])
    const finalBalance = parseNumbers(values[5])


    if( typeof(classifier)!=="string" || typeof(description)!=="string" || !openingBalance && openingBalance!==0 || !debit && debit!==0 || !credit && credit!==0 || !finalBalance && finalBalance!==0 )
        {
            console.log(typeof(classifier)!=="string" , typeof(description)!=="string" , !openingBalance , !debit , !credit , !finalBalance )
            throw new Error("invalid line value types")
        }
        
    // if( openingBalance-debit+credit!==finalBalance )
    //     throw new Error("invalid money amount")
        
    return {
        description,
        classifier,
        openingBalance,
        debit,
        credit,
        finalBalance,
        parent:null //TODO: add parent
    }
} 


const getParent = () : null|number => {
    return null
}

const parseNumbers = (value : string):number => {
    return parseFloat(replaceCommaWithDot(removeDots(removeTheD(value))))
}


export {task1, task2, task3, filesLocations}