import React from 'react';
import Listview from '../component/ListView';
import { create} from 'react-test-renderer';

describe('Snapshot component',() => {
    test('testing header component' ,() => {
        let tree = create(<Listview/>)
        expect(tree.toJSON()).toMatchSnapshot();
    })
    
    
});