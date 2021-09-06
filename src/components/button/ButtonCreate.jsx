import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonCreate.css';

function ButtonCreate() {

    return (
            <Link to='/new-book' className='btn btn-create btn-primary'>
                <i style={{marginRight:'2px',color:'white'}} class='bx bxs-book-add'></i> +book
            </Link>
    );

}

export default ButtonCreate;
