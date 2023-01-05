import React from 'react';
import { Link } from 'react-router-dom';

const Categoriesli = ({ categoriesname }) => {
    return (
        <div>
            <div>
                <Link to={`/allcatagories/${categoriesname.categories_name}`}>
                    <li>{categoriesname.categories_name}</li>
                </Link>
            </div>
        </div>
    );
};

export default Categoriesli;