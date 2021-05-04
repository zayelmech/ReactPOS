import React from 'react';
import "./styles/style.css";
import Product from "../components/Product";
import MainBar from '../components/MainBar';
import ticket from '../ticket';

const fs = require('fs');


class myPOS extends React.Component {
    state = {
        loading:false,
        error:null,
        producto:{
            nombre: "",
            unidad: "",
            cantidad: 0,
            precio: 0,
            subtotal: 0,
        }
    };

    handleChange = e=>{
        console.log("escribiendo...");
        console.log(e.target.value);
        this.setState({
            producto:{
                ...this.state.producto,
                [e.target.name] : e.target.value
            }
        });
    };
    handleClick=(e) =>{
        console.log(`Event ${e}`);
        e.preventDefault();
        this.setState({ loading: true, error:null})
        try {
            ticket.productos.agregar(this.state.producto);
            this.setState({ loading: false, error:null});
            console.log("Producto Agregado");
            //this.props.history.push('/badges');
        } catch (err) {
            this.setState({ loading: false, error:err})
            console.error(err);
        }
    };
    
    render(){
        function leer(ruta, cb) {
            try {
                
                fs.readFile(ruta, (error, data) => {
                    //leido
                    cb(data.toString());
                })    
            } catch (err) {
                console.error(err);
            }
            
        
        }
        const ruta = __dirname + '/dataB.csv';
        //const ruta = '../dataB.csv';
        leer(ruta, console.log);
        
        
        /*
        let newTicket= [["id","nombre"],["101","papa"]];
        newTicket.push(["202","tomate"]);
        console.table(newTicket);

        let jsonX={
            idCliente:"404",
            cliente:"teresa",
            numero:"954-122",
            pedidos:{
                pedido1:newTicket,
                pedido2:newTicket,
        
            },
        };
        console.table(jsonX);*/
        return(  
            <React.Fragment>
                
                <MainBar 
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                />

                <section class="view-section">
                    <textarea name="" id="textArea" cols="30" rows="20"></textarea>
                    <div class="botones">
                        <button>buscar</button>
                    </div>

                    <div class="" id="ticket">
                        <Product/>
                        
                    </div>
                </section>
            </React.Fragment>

        )
    }
}
export default myPOS;