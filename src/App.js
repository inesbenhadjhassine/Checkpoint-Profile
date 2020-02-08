import React from 'react';
import Photo from './Profile.jpg';
  

 const data={

    Photo:Photo,
  
    NamefirstName:"Ignès", NamelastName:"Nazaki",
  
    ProfileLink:"https://fr-fr.facebook.com/businesshoteltunis" 
 };

 function App() {
  
  return (
    <div>
    <img src={data.Photo} alt="Ma photo de profile" />
<h3>{data.NamefirstName} {data.NamelastName}</h3>
{
 (data.ProfileLink!=="") ? (<button><a href={data.ProfileLink}>linkedin</a></button>):(<p>Profile link invalid</p>)

}

    </div>
  );
}

export default App;
