import React, { Component } from 'react';



export class Tour extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showInfo: false
        }
    }
    handleInfoData = () => {
        this.setState(() => {
            return {
                showInfo: !this.state.showInfo
            }
        })
    }
  
    render() {
        const {id,img,name,info,city} =  this.props.tour;
        const {removeTour} = this.props
        return (
           <article className='tour'>
             <div className='img-container'>
                <img  src={img} alt='city' />
                <span className='close-btn' onClick={() => removeTour(id)}>
                   <i className='fas fa-window-close'></i>
                </span>
             </div>
             <div className='tour-info'>
              <h3>{city}</h3>
               <h4>{name}</h4>
               <h5>
                   info {" "}
                   <span onClick={this.handleInfoData}>
                       <i className='fas fa-caret-square-down'></i>
                   </span>
               </h5>
               {this.state.showInfo && <p>{info}</p>}
             </div>
             <div className='tour-info'>
              <h3>{city}</h3>
               <h4>{name}</h4>
               <h5>
                   info {" "}
                   <span onClick={this.handleInfo}>
                       <i className='fas fa-caret-square-down'></i>
                   </span>
               </h5>
               {this.state.showInfo && <p>{info}</p>}
             </div>
           </article>
        )
    }
}

export default Tour
