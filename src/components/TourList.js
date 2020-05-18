import React, { Component } from 'react'
import Tour from './Tour'
import {tourData} from './tourData';

export class TourList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tours: tourData
        }
    }
    removeTour = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState(() => {
            return {
                tours: sortedTours
            }
        })
    }
    
    render() {
       const {tours} = this.state
        return (
            <section className='tourList'>
              {
                  tours.map(tour => {
                      return(
                          <Tour key={tour.id}
                           tour={tour}
                           removeTour={this.removeTour}/>
                      )
                  })
              }
            </section>
        )
    }
}

export default TourList

