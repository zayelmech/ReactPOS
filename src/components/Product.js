import React, { Component } from 'react'
import "./styles/Product.css"

export class Product extends Component {

    render() {

        var producto = {
            nombre: "melon",
            unidad: "kg",
            cantidad: "1",
            precio: "45",
            subtotal: "45"
        }
    
        return (
            <div>
                <input 
                    className="input-product-text input-name-product"
                    type="text" 
                    value={producto.nombre}
                    id="name"
                />
                <input 
                    className="input-product-text"
                    type="text" 
                    value={producto.unidad}
                    id="unit"
                />
                <input 
                    className="input-product-text"
                    type="text" 
                    value={producto.cantidad}
                    id="quantity"
                />
                <input 
                    className="input-product-text"
                    type="text" 
                    value={producto.precio}
                    id="price"
                />
                <input 
                    className="input-product-text"
                    type="text" 
                    value={producto.subtotal}
                    id="subtotal"
                />
            </div>
        )
    }
}

export default Product
