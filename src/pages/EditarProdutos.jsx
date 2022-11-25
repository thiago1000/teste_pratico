import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import storeFetch from "../axios/config";

const EditarProdutos = () => {

  const [title, setTitle] = useState();
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [stock, setStock] = useState();
  const [description, setDescription] = useState();
  const [images, setImages] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const response = await storeFetch.get(`/products/${id}`);

      const data = response.data;

      console.log(data);

      setTitle(data.title);
      setBrand(data.brand);
      setCategory(data.category);
      setPrice(data.price);
      setRating(data.rating);
      setStock(data.stock);
      setDescription(data.description);
      setImages(data.images);
      
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (e) => {
    e.preventDefault();

    const product = { title, brand, category, price, rating, stock, description, images }

    const updateProduct = await storeFetch.put(`/products/${id}`, {
      body: product,
    });
    
    const data = updateProduct.data;
    const status = setTitle(data.title)
    console.log(status);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const cancelEdit = () => {
     navigate("/");
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-center mt-20 text-3xl font-bold">Editar produto</h2>
      <form onSubmit={(e) => editProduct(e)}  className="w-2/4 mx-auto mt-">
        <div className="items-center border-b border-gray-500 py-2">
          <label className="font-semibold">Titulo:</label>
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="text" 
            placeholder="Titulo"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
        </div>
          <div className="items-center border-b border-gray-500 py-2">
        <label className="font-semibold">Marca:</label>
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="text" 
            placeholder="Marca"
            onChange={(e) => setBrand(e.target.value)}
            value={brand || ""}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <label className="font-semibold">Categoria:</label>
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="text" 
            placeholder="Categoria"
            onChange={(e) => setCategory(e.target.value)}
            value={category || ""}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <label className="font-semibold">Preço:</label>
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="number" 
            placeholder="Preço"
            onChange={(e) => setPrice(e.target.value)}
            value={price || ""}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <label className="font-semibold">Avaliação:</label>
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="tel" 
            maxLength={2}
            placeholder="Avaliação"
            onChange={(e) => setRating(e.target.value)}
            value={rating || ""}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <label className="font-semibold">Estoque:</label>
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="number" 
            placeholder="Estoque"
            onChange={(e) => setStock(e.target.value)}
            value={stock || ""}
          />
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <label className="font-semibold">Descrição:</label>
          <textarea 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
            value={description || ""}
          />  
        </div>
        <div className="items-center border-b border-gray-500 py-2">
          <label className="font-semibold">Imagem:</label>
          <input 
            type="url"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            onChange={(e) => setImages(e.target.value)}
            value={images || ""}
          />  
        </div>
        <button type="submit" className="mt-8 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded" >
          Editar produto
        </button>
        
        <button onClick={cancelEdit} className="mt-8 ml-2 bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm border-4 text-white py-1 px-2 rounded" >
          Cancelar edição
        </button>
      </form>
    </div>
  )
}

export default EditarProdutos