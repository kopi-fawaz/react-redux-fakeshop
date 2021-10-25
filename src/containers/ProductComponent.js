import React from "react";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

const ProductComponent = () => {
    // Get Item From Store Redux
    const product = useSelector((state) => state.allProducts.product)

    const mapProducts = product.map( (value) => {
        const {id, title, image, price, category} = value;
        return(
        <div className="four wide column" key={id}>
            <Link to={`/product/${id}`} >
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        )

    })

    return(
        <> {mapProducts} </>
    )
}

export default ProductComponent;