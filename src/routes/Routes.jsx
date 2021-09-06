import React from 'react'
import {Switch, Route } from 'react-router-dom'
import AddBook from '../pages/addBook/AddBook'
import BookList from '../pages/bookList/BookList'

function Routes() {
    return (
            <Switch>
                <Route exact path='/' component={BookList} />
                <Route exact path='/new-book' component={AddBook} />
            </Switch>
    )
}

export default Routes
