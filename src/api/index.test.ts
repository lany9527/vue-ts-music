import * as index from "@/api/index"
// @ponicode
describe("index.fetchUsers", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.fetchUsers()
        }
    
        expect(callFunction).not.toThrow()
    })
})
