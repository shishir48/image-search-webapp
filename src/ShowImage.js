import './imageList.css';
import React from 'react';

const ShowImage = props =>{

  // constructor(props){
  //   super(props)
  //   this.state={arr:[<h1>asdadf</h1>,<h2>fdsfdsasda</h2>]};
  // }
const newton = props.images.map((image) => {
  
  return (<img src={image.urls.regular} alt="cars"/>);
  
  });

  return (
    <div className="image">{newton}</div>
  );
  
}

export default ShowImage;