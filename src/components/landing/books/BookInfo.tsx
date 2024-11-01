import React from 'react'

const BookInfo = ({ details }: { details: string }) => {
  return (
    <div className="flex flex-col gap-3">
      <div
        dangerouslySetInnerHTML={{ __html: details }}
      ></div>
    </div>
  )
}

export default BookInfo