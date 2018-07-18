import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  //render Pet.js instances
  petDetails = () => {

    this.props.pets.map( individualPet => <Pet pet={individualPet} /> );
  }

  render() {

    return <div className="ui cards"
      pets={this.props.pets}
      >Content here: {this.petDetails}</div>
  }
}

export default PetBrowser
