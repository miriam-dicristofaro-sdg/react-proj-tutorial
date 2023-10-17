import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { useGlobalContext } from "./context";

function App() {
  const { isModalOpen, openModal } = useGlobalContext();
  return (
    <>
      <Navbar />
      <Sidebar />
      <Modal />
      {!isModalOpen && (
        <main className='modal-controller'>
          <button className='btn btn-selector' onClick={openModal}>
            {" "}
            open modal
          </button>
        </main>
      )}
    </>
  );
}

export default App;
