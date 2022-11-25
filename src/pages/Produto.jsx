import storeFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import ModalDelete from "../components/ModalDelete";

const Produto = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await storeFetch.get(`/products/${id}`);

      const data = response.data;

      console.log(data);

      setProduct(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {!product.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="product bg-gray-300 min-h-screen">
          <div className="container grid lg:grid-cols-3 gap-2 mx-auto sm:grid-cols-1 bg-cyan-500 mb-5">
              {product.images.map((img, index) =>(
                <div key={index} className="w-full rounded">
                  <img className="w-10/12" src={img} alt={product.title}/>
                </div>
              ))}
          </div>
          <div className="container mx-auto">
            <h2 className="text-center font-bold text-4xl">{product.title} - $ {product.price}</h2>
            <h3 className="font-bold text-3xl">Informações:</h3>
            <p className="font-gray-500 mt-5 text-xl"><span className="font-bold">Marca: </span>{product.brand}</p>
            <p className="font-gray-500 mt-5 text-xl"><span className="font-bold">Descrição: </span>{product.description}</p>
            <p className="font-gray-500 mt-5 text-xl"><span className="font-bold">Avaliação: </span>{product.rating}</p>
            <p className="font-gray-500 mt-5 text-xl mb-8"><span className="font-bold">Estoque: </span>{product.stock}</p>
            <Link className="btn text-white bg-green-700 hover:bg-green-800" to={`/produto/editar/${product.id}`}>Editar</Link>
            <ModalDelete idDelete={product.id} />
          </div>
          
        </div>
      )}
    </div>
  )
}

export default Produto;