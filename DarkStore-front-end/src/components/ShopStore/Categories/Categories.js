import React from 'react';
import './style.css';

const Categories = prosp => {
    return (
        <React.Fragment>
            <span>Categories</span>
            <ul class="CategoryList">
                <li>
                    <span>
                        <a href="#">Mouses</a>
                    </span>
                    <ul>
                        <li><a href="#">logitech</a></li>
                        <li><a href="#">Sandisk</a></li>
                        <li><a href="#">Samsung</a></li>
                    </ul>
                </li>
                <li>
                    <span>
                        <a href="#">Keyboard</a>
                    </span>
                    <ul>
                        <li><a href="#">Rexus</a></li>
                        <li><a href="#">logitech</a></li>
                    </ul>
                </li>
                <li>
                    <span>
                        <a href="#">Headsets</a>
                    </span>
                    <ul>
                        <li><a href="#">Rexus</a></li>
                        <li><a href="#">Armaggeddon</a></li>
                        <li><a href="#">Mediatech</a></li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Categories;

