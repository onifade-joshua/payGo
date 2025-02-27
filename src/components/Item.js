import React from "react";
import PropTypes from 'prop-types';


const Item = ({ id, imageUrl, productName, price }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3"> 
            <div className="card text-center p-3 shadow-sm"> 
                <img src={imageUrl} className="card-img-top img-fluid" alt={productName} />
                <div className="card-body">
                    <h4 className="card-title">{productName}</h4>
                    <strong><p className="card-text">{price}</p></strong>
                </div>
            </div>
        </div>
    );
};

export default Item;

Item.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};
