var root = findTopNode(flat)

describe('Testing the functionality, this is the app', () => {
    it('should return Array', () => {
        let boolean1, boolean2, boolean3;
        boolean1 = root.constructor === Array;
        boolean2 = Array.isArray(root);
        boolean3 = Object.prototype.toString.call(root) === '[object Array]'; // []
        expect(boolean1 && boolean2 && boolean3).toBe(true);
    })
    it('Array value should be object/objects', () => {
        let boolean1
        var ifIsObject = root.map(el => {
            return Object.prototype.toString.call(el) === '[object Object]' && (!isNaN(el.id) && !isNaN(el.parent_id))
        });
        boolean1 = ifIsObject.indexOf(false);
        expect(boolean1).toBe(-1);

    })
    it('should be top/highest node/nodes', () => {
        let flat = [{id: 4,parent_id: 1}]
        let flat1 = [{ id: 4, parent_id: 1}, { id:1, parent_id:25}]
        let flat2 = [{ id: 4, parent_id: 1}, { id:1, parent_id:null}]
        let flat3 = [{ id: 4, parent_id: 1}, { id:2, parent_id:null}]
        let flat4 = [{ id: 4, parent_id: 1}, { id:2, parent_id:500}]
        let flat5 = [{ id: 4, parent_id: 1}, { id:1, parent_id:200}, {id:200, parent_id:220}]
        let flat6 = [{ id: 4, parent_id: 1}, { id:1, parent_id:200}, {id:200, parent_id:null}]
        let flat7 = [{ id: 4, parent_id: 1}, { id:6, parent_id:0}, {id:1, parent_id:5}, {id:5,parent_id:6}]
        let flat8 = [{ id: 7, parent_id: 1}, { id:1, parent_id:0}, {id:155, parent_id:null}, {id:222,parent_id:0}]
        let flat9 = [{ id: 244, parent_id: 1}, { id:13, parent_id:0}, {id:155, parent_id:null}, {id:222,parent_id:0}]


        expect(findTopNode(flat)).toEqual([flat[0]]);
        expect(findTopNode(flat1)).toEqual([flat1[1]]);
        expect(findTopNode(flat2)).toEqual([flat2[1]]);
        expect(findTopNode(flat3)).toEqual([flat3[1], flat3[0]]);
        expect(findTopNode(flat4)).toEqual(flat4);
        expect(findTopNode(flat5)).toEqual([flat5[2]]);
        expect(findTopNode(flat6)).toEqual([flat6[2]]);
        expect(findTopNode(flat7)).toEqual([flat7[1]]);
        expect(findTopNode(flat8)).toEqual( [flat8[2], flat8[1], flat8[3] ]);
        expect( findTopNode(flat8)[0] ).toBe( flat8[2]);
        expect(findTopNode(flat9)[0]).toBe(flat9[2]);
        expect(findTopNode(flat1)[0]).toBe(flat1[1])
        expect(findTopNode(flat2)[0]).toBe(flat2[1])
        expect(findTopNode(flat3)[0]).toBe(flat3[1])
    })
});



