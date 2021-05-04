import React, { Component } from 'react'

export class MainBar extends Component {
    handleClick = e  => {
        const unitText= document.getElementById("cantidad");
        const unit = unitText.value;
        //console.log(unit);
        console.log("Hola");
    };
    render() {
        return (
            <div className="main-search">
            <div className="div-content-input">
                <label for="buscar">Buscar</label>
                <input 
                    onChange={this.props.onChange}
                    className="text-main-input search-text"
                    placeholder="Producto a buscar"
                    type="text" 
                    name="nombre" 
                    id="buscar"
                    />
                <button>Buscar</button>
            </div>
            <div className="div-content-input">
                <label for="unidad">Unidad</label>
                <input 
                    onChange={this.props.onChange}
                    className="text-main-input" 
                    type="text" 
                    name="unidad" 
                    id="unidad" 
                    list="unitList"
                    />
                <datalist id="unitList">
                    <option value="kg">kg</option>
                    <option value="gr">gr</option>
                    <option value="L">L</option>
                </datalist>
            </div>

            <div className="div-content-input">
                <label for="cantidad">Cantidad</label>
                <button >-</button>
                <input 
                    onChange={this.props.onChange}
                    className="text-main-input" 
                    type="text" 
                    name="cantidad" 
                    id="cantidad"
                    />
                <button >+</button>
            </div>
            <div className="div-content-input">

                <label for="precioUnit">$ c/u</label>
                <input 
                    onChange={this.props.onChange}
                    className="text-main-input" 
                    type="text" 
                    name="precio" 
                    id="precioUnit"/>
            </div>
            <div className="div-content-input">
                <label for="subtotal">Sub $</label>
                <input
                    onChange={this.props.onChange} 
                    className="text-main-input" 
                    type="text" 
                    name="subtotal" 
                    id="subtotal"/>
            </div>
            <button onClick={this.props.onClick}>Agregar</button>
        </div>
        )
    }
}

export default MainBar
