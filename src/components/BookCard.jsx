import React from 'react'

// bileşen prop alırken deconstruc yöntemi ile
// direl gelen propun değerlerine erişmemize yarar
const BookCard = ({ book, handleModal, handleRead, handleEditModal }) => {

  return (
    <div className='d-flex rounded border shadow p-3 justify-content-between align-items-center mt-5'>
        <div>
            <h5 style={{
              textDecoration: book.isRead ? "line-through" : "none", 
            }}
            >{book.title}</h5>
            <p>{book.date}</p>
        </div>
        <div className='btn-group'>
            <button 
            className='btn btn-danger' 
            onClick={()=>handleModal(book.id)}
            >Sil</button>
            <button className='btn btn-primary' onClick={()=>handleEditModal(book)}>Düzenle</button>
            <button className='btn btn-success' onClick={()=> handleRead(book)}>{book.isRead ? "Okundu" : "Okunmadı"}</button>
        </div>
    </div>
  )
}

export default BookCard