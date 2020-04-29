import React, { Component } from 'react'
import ImmageItem from './immageitem'
import animalData from './data.js';


export default class immageList extends Component {
    state = { selected: null };

    handleChange = (e) => {
        this.setState({ selected: e.target.value });
      };
    render() {
        return (
            <>
               <section className="options">
            <select className="selctionStyle" onChange={this.handleChange}>
              <option value="" defaultValue>All Types</option>
                        <option value="rhino">rhino</option>
                        <option value="narwhal">narwhal</option>
                        <option value="unicorn">unicorn</option>
                        <option value="triceratops">triceratops</option>
                        <option value="markhor">markhor</option>
                        <option value="addax">addax</option>
            </select>
          </section>
                <ul>
                {
                animalData
                  .filter(animal => {
                    if (!this.state.selected) return true;
            
                    else return animal.keyword === this.state.selected;
                  })
                  .map(animal => {
                  return <ImmageItem animal={animal} />
                  })        
                    }
                </ul>
        </>
        )
    }
}
