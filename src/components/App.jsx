import React from 'react';
import AppLayout from './AppLayout';
import ListContainer from '../containers/ListContainer';
import SearchList from './SearchList';
import HotList from './HotList';
import NewList from './NewList';

const App = () => {
    return (
        <>
            <AppLayout>
            </AppLayout>
            <SearchList/>
            <HotList/>
            <NewList/>
            <ListContainer/>
        </>
    )
};

export default App;
