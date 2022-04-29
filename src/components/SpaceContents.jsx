import { useState, useEffect } from "react"
import moment from "moment"



export default function SpaceContents() {
  const [title, setTitle] = useState([])
  const [link, setLink] = useState([])
  const [date, setDate] = useState([])

  let apiCall = () => {
    fetch(`https://apotd-api.herokuapp.com/api/links/`)
      .then(res => res.json())
      .then(data => {


        let rand = data[Math.floor(Math.random() * data.length)];


        let date = moment(rand.date).utc().format('MM/DD/YYYY')
        setTitle(rand.title)
        setLink(rand.link)
        setDate(date)
        console.log(moment(rand.date).utc().format('MM/DD/YYYY'))
      });
  }

  useEffect(() => {


    apiCall();
  }, []);






  return (
    <div className="sp-container">
      <div className="space-contents">

        <h4>Link: <a href={link}>{title}</a></h4>
        <p>Picture Taken: {date}</p>
      </div>
      <div onClick={apiCall} className='picture-button'>
        <h1>More Astronomy Pics!</h1>
      </div>

    </div>
  )
}
