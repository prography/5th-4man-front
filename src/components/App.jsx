import React from 'react';
import AppLayout from './AppLayout';
import ListContainer from '../containers/ListContainer';

const App = () => {
    return (
        <>
         <AppLayout>
            <ListContainer />
        </AppLayout>
        </>
    )
};

export default App;
