import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import storeFetch from "../axios/config";
import ModalDelete from "../components/ModalDelete";

import "../styles/main.css"

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async() =>{
    try {

      const response = await storeFetch.get('/products')

      const data = response.data;

      console.log(data.products);

      setProducts(data.products);

    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="text-3xl font-bold">
      <div className="bg-gray-300">
        <div className="mx-auto max-w-3xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-5">Lista de produtos</h2>
          <div className="container mx-auto">
          <table className="border-separate border border-slate-500 mx-auto">
            <thead>
              <tr>
                <th className="border border-slate-600">Produto</th>
                <th className="border border-slate-600" colSpan={3}>Ação</th>
              </tr>
            </thead>
            <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border border-slate-700">{product.title}</td>
                <td className="border border-slate-700">
                  <Link className="btn text-white bg-blue-700 hover:bg-blue-800 " to={`/produto/${product.id}`}>Ver dados</Link>
                </td>
                <td className="border border-slate-700">
                  <Link className="btn text-white bg-green-700 hover:bg-green-800" to={`/produto/editar/${product.id}`}>Editar</Link>
                </td>
                <td className="border border-slate-700">
                  <ModalDelete idDelete={product.id} />
                </td>
              </tr>
              
            ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home;