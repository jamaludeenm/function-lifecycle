import React ,{useEffect}from 'react'

//ComponentWillUnmount
function Home() {
    useEffect(() =>{
      return ()=> {
        console.log('CWUM')
      };
  
    },[]);
    
    return (
      <div>Home</div>
    )
  }
  
  export default Home