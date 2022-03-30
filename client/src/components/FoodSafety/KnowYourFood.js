import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class KnowYourFood extends Component{
    render(){
        return(
            <div className='form-body'>
            <div className='form-container'>
            <div className='title'>Detail Description of Food Procedure</div>
            <br></br>
            <div className='content'>
            <b><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
                            an unknown printer took a galley of type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but also the leap into electronic
                               typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                               with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                               recently with desktop publishing software like Aldus PageMaker including versions
                                of Lorem Ipsum.orem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p></b>

            <b><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
                            an unknown printer took a galley of type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but also the leap into electronic
                               typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                               with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                               recently.
            </p></b>

            <b><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
                            an unknown printer took a galley of type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but also the leap into electronic
                               typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                               with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                               recently.
            </p></b>

            
            <Link to="/FoodSafety" className='btn btn-warning bg-danger'>Click Here to go Back</Link>
            </div> 
            </div>
            </div>   
    )
        };
}
export default KnowYourFood;