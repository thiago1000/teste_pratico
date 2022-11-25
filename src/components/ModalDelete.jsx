import storeFetch from "../axios/config";
import { useState } from "react";

const ModalDelete = (props) => {
  const [showModal, setShowModal] = useState(false);

  const modalDel = () => {
    setShowModal(true);
    console.log(props.idDelete);
  }

  const deleteProduct = async() => {
    try {
      const response = await storeFetch.delete(`/products/${props.idDelete}`);
      const data = response.data;
      const status = (response.status);
      if(status === 200) {
        alert("Produto "+ data.title + " foi deletado com sucesso !!!");
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button
      
        className="btn leading-5 text-white bg-red-700 hover:bg-red-800" 
        type="button"
        onClick={() => modalDel()}
      >
        Excluir
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Deseja deletar o produto?
                  </p>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Não
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => deleteProduct()}
                  >
                    Sim
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ModalDelete