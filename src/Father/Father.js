import React from 'react';
import Brother from '../components/Brother/Brother';
import MySelf from '../components/MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({ house}) => {
    return (
        <div>
            <h4>Father</h4>
            <p>house: {house}</p>
            <div style={{display: 'flex'}}>
                <MySelf house={house}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;