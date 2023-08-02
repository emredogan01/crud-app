import { v4 } from "uuid";
import { useState } from "react";
import BookCard from "./components/BookCard";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";
import { toast } from "react-toastify";



function App() {
  // kitap state'leri
  const [books, setBooks] = useState([])
  const [bookName, setBookName] = useState("")
  const [inputError, setInputError] = useState(false)

  // modal state'leri 
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false)
  const [editItem, setEditItem] = useState(null);


  // inputtaki değişimi izler
  const handleChange = (e)=>{
    
    // kitap ismi state i ni güncelle
    setBookName(e.target.value)
  }

  // form un gönderilme olayını izler
  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!bookName){
      toast.warn("Lütfen kitap ismi giriniz.", {autoClose: 2000});
      return;
    }

    // kitabı saklamak için gerekli verilere sahip obje oluşturma
    const newBook = {
      id: v4(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    }
    // oluşturulan kitap objesini kitaplar dizisine aktar
    // spread operatörü kullanılarak önceden eklenen elemanları muahfaza et
    setBooks([...books, newBook]) 

    // eleman eklenince inputu sıfırla
    setBookName("");

    // bildirim
      toast.success("Kitap başarıyla eklendi.", {autoClose: 2000});

  };
  
  // console.log(books)

  // silinince modal açma işlemini yapar
  const handleModal = (id)=>{
    // id satate aktar
    setDeleteId(id);
    // modal'ı ekrana bas
    setShowDeleteModal(true);
  };

  // silme işlemini yapar
  const handleDelete = ()=> {
    // silinecek id ye eşit olmayanları al ve bir diziye aktar
    const filred = books.filter((book)=> book.id !== deleteId)
    // satate güncelleme
    setBooks(filred);
    // modalı kapat
    setShowDeleteModal(false)

    // bildirim ver
      toast.error("Kitap başarıyla silindi.", {autoClose: 2000,});

  };

  // okundu butonuna tıklanılınca çalışır
  const handleRead = (book) =>{
    // okundu değerini tersine çevir
    const updatedBook = {...book, isRead: !book.isRead}
    
    // dizideki güncellenecek elemanın sırasını bulma
    const index = books.findIndex((item)=> item.id === book.id)
    
    // books dizisiin bir kopyasını oluştur
    const cloneBooks = [...books]
    // dizinin kopyasında gerekli elemanı güncelle
    cloneBooks[index] = updatedBook
    // state'i güncelle
    setBooks(cloneBooks)
  };
  
  // edit modalı açar
  const handleEditModal = (book)=>{
    // düzenlenecek elemanı state aktar
    setEditItem(book);

    // modal'ı aç
    setShowEditModal(true);
  };
  
  // kitabı günceller
  const handleEditBook = ()=>{
    // sırasını bulma
    const index = books.findIndex((book)=>book.id == editItem.id)
    // state in kopyasını oluştur
    const cloneBooks = [...books]

    // eskş kitabı diziden çıkart yerine yenisini koy
    cloneBooks.splice(index, 1, editItem);
    // state i güncelle
    setBooks(cloneBooks);
    // modal ı kapat
    setShowEditModal(false);

    // bildirim ver  
      toast.info("Kitap güncellendi.", {autoClose: 2000});
  

  }

  return (
    <div>
      <header className="bg-dark text-white text-center py-3 fs-5">
        <h1>Kitap Kurdu</h1>
      </header>
      {/* form alanı */}
      <div className="container">
        {/* hata bildirimini ekrana basma */}
        {
        inputError && 
        (<div className="alert alert-danger mt-4">{inputError}</div>)
        }
        <form onSubmit={handleSubmit} className="d-flex gap-3 mt-4">
          <input 
          type="search"
          value={bookName}
          placeholder="Lütfen bir kitap ismi giriniz"
          onChange={handleChange}
          className="form-control shadow"
           />
          <button className="btn btn-warning shadow">Ekle</button>
        </form>

        {/* eğer state içerisi boş ise ekrana bunu yaz */}
        {books.length === 0 && (<h4 className="alert alert-primary mt-3">Henüz herhangi bir kitap eklenmedi</h4>)}
        {/* eğer state içerisinde en az bir eleman varsa ekarana yaz */}
        {books.map((book)=> (
          <BookCard 
          key={book.id} 
          book={book} 
          handleModal={handleModal} 
          handleRead={handleRead} 
          handleEditModal={handleEditModal}/>
        ))}

      </div>

      {/* modallar */}
      {showDeleteModal && <DeleteModal 
      handleDelete={handleDelete} 
      setShowDeleteModal={setShowDeleteModal} />}

      {
        showEditModal && <EditModal 
        setShowEditModal={setShowEditModal}
        editItem ={editItem}
        setEditItem={setEditItem}
        handleEditBook={handleEditBook}
        />
      }
    </div>
  );
}

export default App;
