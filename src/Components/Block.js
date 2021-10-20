import React from 'react';

class Block extends React.Component {
   
  constructor(props) {
    super(props);
  }
    
  render() {

  const mystyle = {
      background: this.props.style
    };

  return (
    <>
      <div class = "blockers" style={
        mystyle
        }>
      </div>
      
      <div className="bottom">
          <div className="white"></div>
      </div>


    </>
      );
    }
  }


  export default Block;