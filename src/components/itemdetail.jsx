import React, { useContext } from 'react';
import ItemCount from './itemcount';
import "./itemdetail.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartcontext";

 const ItemDetail = ({id, nombre, imagen, categoria, precio }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio, imagen
        }

        addItem(item, quantity)
    }

  return (
                <div className="contenedor-detalle">
                    <div className="contenedor-imagen">
                        <img className="detalle-imagen"src={imagen} alt={nombre}/>
                    </div>
                    
                    <div className="producto-detalles">
                        <h2 className="detalle-titulo">{nombre}</h2>
                        <div>{categoria}</div>
                        <p>
                            <span>
                                ${precio}
                            </span>
                        </p>
                        <div class="d-flex align-items-baseline mt-4 mb-6 pb-6  border-secondary">
                            <div class="d-flex gap-2 flex-wrap">
                                <label class="btn btn btn-outline-light">
                                    <input class="visually-hidden peer " name="size" type="radio" value="xs" checked />
                                    <div class="w-9 h-9 rounded-lg d-flex align-items-center justify-content-center ">
                                        XS
                                    </div>
                                </label>
                                <label class="btn btn btn-outline-light">
                                    <input class="visually-hidden peer " name="size" type="radio" value="s" />
                                    <div class="w-9 h-9 rounded-lg d-flex align-items-center justify-content-center ">
                                        S
                                    </div>
                                </label>
                                <label class="btn btn btn-outline-light">
                                    <input class="visually-hidden peer " name="size" type="radio" value="m" />
                                    <div class="w-9 h-9 rounded-lg d-flex align-items-center justify-content-center ">
                                        M
                                    </div>
                                </label>
                                <label class="btn btn btn-outline-light">
                                    <input class="visually-hidden peer " name="size" type="radio" value="l" />
                                    <div class="w-9 h-9 rounded-lg d-flex align-items-center justify-content-center ">
                                        L
                                    </div>
                                </label>
                                <label class="btn btn btn-outline-light">
                                    <input class="visually-hidden peer " name="size" type="radio" value="xl" />
                                    <div class="w-9 h-9 rounded-lg d-flex align-items-center justify-content-center ">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="contenedor-contador">
                            {
                                quantityAdded > 0 ? (
                                    <Link to="/cart" className="agregar">Terminar Compra</Link>
                                ):(
                                    <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
                                )
                            }
                            
                        </div>  
                    </div>  
                </div>
    
  )
}

export default ItemDetail;