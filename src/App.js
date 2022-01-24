import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
          items: [],
          DataisLoaded: false
      };
    }

    

    componentDidMount() {
        fetch("https://assessments.reliscore.com/api/cric-scores/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) 
        return <div><h1> Please wait some time.... </h1> </div> ;
      return (
      <div className = "App">
        <form>
          <label>Source of Data: </label>
            <input id='src-test' type='radio' value='test' name='source' checked/>Test Data
            <input id='src-server' type='radio' value='server' name='source'/>Server Data
        </form>
        <br/>
        <br/>
        <div className='row'>
          <div className='country'>
            <form>
              <label>The Country: </label>
              <input type="text" placeholder='Enter the country' className='country-input' required/>
            </form>
          </div>
          <div className='average'>
                  The Average: 
          </div>
          </div>
              <br/>
              <div className='row'>
              <div className='country'>
                <form>
                <label>The Country: </label>
                <input type="text" placeholder='Enter the country' className='country-input' required/>
                </form>
              </div>
              <div className='average'>
                  The Average: 
              </div>
            </div>
              

      </div>
  );
}
}

  export default App;


