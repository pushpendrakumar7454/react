import React from 'react'
import Card from './components/cart'

const App = () => {
  let users=[
    {
      img:'https://i.pinimg.com/736x/77/99/e4/7799e4fa43745c7193228791a424d389.jpg',
      days:"13 days ago",
      name:"Amazon",
      level:"Senior UI|UX Designer",
      part:"Full time",
      remote:"Senior Level",
      rupeye:"$120/hr",
      location:"Mumbai,india"
    },
    
  
  {
    img:'https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png',
    days:"5 days ago",
    name:"Google",
    level:"Frontend Developer",
    part:"Full time",
    remote:"Mid Level",
    rupeye:"$100/hr",
    location:"Bangalore, India"
  },
  {
    img:'https://tse2.mm.bing.net/th/id/OIP.PWoq1WvDQDxc_MPv4Jt0GwHaHa?pid=Api&P=0&h=180',
    days:"2 days ago",
    name:"Microsoft",
    level:"Backend Developer",
    part:"Part time",
    remote:"Senior Level",
    rupeye:"$110/hr",
    location:"Hyderabad, India"
  },
  {
    img:'https://tse2.mm.bing.net/th/id/OIP.OQrbMsmN86RrB-hXq7AfSQHaHY?pid=Api&P=0&h=180',
    days:"7 days ago",
    name:"Flipkart",
    level:"Product Designer",
    part:"Full time",
    remote:"Junior Level",
    rupeye:"$80/hr",
    location:"Delhi, India"
  },
  {
    img:'https://www.liblogo.com/img-logo/in6145ie99-infosys-logo-infosys-vector-logo-infosys-logo-vector-free-download.png',
    days:"1 day ago",
    name:"Infosys",
    level:"React Developer",
    part:"Remote",
    remote:"Mid Level",
    rupeye:"$70/hr",
    location:"Pune, India"
  },
  {
    img:'https://tse4.mm.bing.net/th/id/OIP.tdm-N72lMfFwsEfJ4Cn2dQHaE8?pid=Api&P=0&h=180',
    days:"10 days ago",
    name:"TCS",
    level:"Software Engineer",
    part:"Full time",
    remote:"Senior Level",
    rupeye:"$90/hr",
    location:"Noida, India"
  },
]
  
  return (
    <div className="parent m-10 flex gap-13 flex-wrap">
     {users.map((elem)=>{
      return <Card img={elem.img} days={elem.days} name={elem.name} level={elem.level} part={elem.part} remote={elem.remote} rupeye={elem.rupeye} location={elem.location} />
     })}
    </div>
  )
}

export default App
