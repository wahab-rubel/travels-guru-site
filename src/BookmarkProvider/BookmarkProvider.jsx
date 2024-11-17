
import React, { createContext, useState } from 'react'

export const BookmarkContext = createContext(null)

function BookmarkProvider({ children }) {

 const [Bookmark, setBookmark] = useState([]);
  return (
    <BookmarkContext.Provider value={{Bookmark, setBookmark}}>
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkProvider
