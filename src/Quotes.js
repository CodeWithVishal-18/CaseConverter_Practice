import React, { useEffect, useState } from 'react'

export default function Quotes(props) {
  let [quote, setQuote] = useState("")
  let [author,setAuthor]=useState("")
  async function randomQuote() {
    let response = await fetch("https://dummyjson.com/quotes/random")
    let data = await response.json()
    setQuote(data.quote)
    setAuthor(data.author)
  }
  useEffect(() => {
    randomQuote()
  }, [])
  return (<>
    <div className='container text-center mt-5'>
      <div className='p-2 shadow-lg mx-auto w-75 rounded-3' style={{ color: "brown", backgroundColor: "burlywood" }}>
        <h3><span style={{ color: "aqua" }}>❝</span> {quote}<span style={{ color: "aqua" }}>❞</span></h3>
        <p style={{ color: "green", fontWeight: "bold", fontSize: "1.2em" }}>－{author}</p>
      </div>
    </div>
  </>
  )
}