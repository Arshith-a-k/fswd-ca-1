import ServiceCard from '/.components/ServiceCard';

import '/.App.css'

function App(){
  const service = [
    {
      id : '1',
      service_title : 'Web Development',
      service_description : 'develops web application',
    },
    {
      id : '2',
      service_title : 'Software Development',
      service_description : 'develops software',
    },
    {
      id : '3',
      service_title : 'Designer',
      service_description : 'designs UI/UX'
    },

  ]




return(
  <>
  <div>
  <h1>Service Title</h1>
  {service.map((Data) => (
    <ServiceCard.key={Data.id},service_title={Data.service_title},service_description={Data.service_description}/>
  ))}
  </>

  </div>
  <h1>Service Title</h1>
  
  </>
 )
}


  




export default App;