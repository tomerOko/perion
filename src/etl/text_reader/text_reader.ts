
import * as fs from 'fs';


const readFileAsnc = (fileAddress:string):Promise<string> => {
  return new Promise((resolve, reject)=>{
    fs.readFile(fileAddress, 'utf8' , (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

export {readFileAsnc}

// readFileAsnc(("/app/src/etl/inputs/input3.txt")).then(data=>(console.log(data)))