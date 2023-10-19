import React, { useContext, useState } from 'react'
import { CartContext } from '../context/cartcontext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';


export const CheckOut = () => {
    const [orderId, setPedidoId] = useState("");

    const {cart, clearCart, total} = useContext(CartContext)

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: total()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "orders");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                clearCart();
            })

    }

    if (orderId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {orderId}</p>
            </div>
        )
  }

  return (
    <main>
        <div className="d-flex justify-content-center m-0 p-0 w-100">
            <div className="bg-grey border border-shadow m-2 card-size rounded p-2 my-4">
                <form className="formulario" onSubmit={handleSubmit(comprar)}>
                    <div>
                        <h2 className="fs-3 fw-bold text-center">Orden de compra</h2>
                    </div>
                    <div className="mb-3 m-2">
                        <label  className="form-label m-0">Nombre:</label>
                        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} className="form-control border border-dark"  />
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="exampleInputEmail1" className="form-label m-0">Correo:</label>
                        <input type="email" placeholder="Ingresá tu e-mail" {...register("email")}className="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="exampleInputEmail1" className="form-label m-0">Telefono:</label>
                        <input type="phone" placeholder="Ingresá tu numero de telefono" {...register("telefono")}className="form-control border border-dark" />
                    </div>
                    <div className="mb-3 m-2">
                        <div className="row d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary btn-black border border-white text-white bg-black w-auto me-1">Crear Orden</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
    
  )
}

export default CheckOut;