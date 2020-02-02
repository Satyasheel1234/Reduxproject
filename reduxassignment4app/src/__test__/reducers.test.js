import reducer from '../reducers';

describe('Reducer', () => {
    it('should return initial state', () => {
        expect(JSON.stringify(reducer(undefined, {}))).toEqual(JSON.stringify({
            courseList: {},
            Form:{}
        }))
    })

    it('reduceer test for GET_LATEST',()=>{
        let state ={
            courseList: [],
            Form:[]
        }

        state = reducer(state,{
            action:"GET_LATEST"
        })
        expect(state).toEqual({
            courseList: [],
            Form:[]
        })
    })
})