import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonCreate.css';

function ButtonCreate() {

    return (
            <Link to='/new-book' className='btn btn-primary'>
                + Book
            </Link>
    );

}

export default ButtonCreate;
