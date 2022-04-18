
import {readFileAsnc as beingTested} from './text_reader'

test('work on a valid file', () => {

    beingTested(("/app/src/etl/text_reader/testing_text.txt")).then(data=>{
        expect(typeof data).toBe("string")
    }).catch(err => {
        expect(err).toBe(null)
    })
})
