import { useState } from "react";
import storeFetch from "../axios/config";
import { useNavigate } from 'react-router-dom';

const AdicionarProduto = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState();
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [stock, setStock] = useState();
  const [description, setDescription] = useState();
  const [images, setImages] = useState();

  const addProduct = async (e) => {
    e.preventDefault();

    const product = { title, brand, category, price, rating, stock, description, images }

    const addProd = await storeFetch.post("/products/add", {
      body: product,
    });

    console.log(addProd)

    const status = (addProd.status);
    if(status === 200) {
      alert("Produto "+ product.title + " foi adicionado com sucesso !!!");
    }

    navigate("/");
    
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-center mt-20 text-3xl font-bold">Adicionar produto</h2>
      <form onSubmit={(e) => addProduct(e)} className="w-2/4 mx-auto mt-">
        <div className="items-center border-b border-gray-500 py-2">
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="text" 
            placeholder="Titulo"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="text" 
            placeholder="Marca"
            required
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="text" 
            placeholder="Categoria"
            required
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="number" 
            placeholder="Preço"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="tel" 
            maxLength={2}
            placeholder="Avaliação"
            required
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="number" 
            placeholder="Estoque"
            required
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="url" 
            placeholder="url da Imagem"
            required
            onChange={(e) => setImages(e.target.value)}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <textarea 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            placeholder="Descrição"
            required
            onChange={(e) => setDescription(e.target.value)}
          />  
        </div>
        <button type="submit" className="mt-8 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded" >
         Adicionar produto
        </button>
      </form>
    </div>
  )
}

export default AdicionarProduto;