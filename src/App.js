import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker';  

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {

    const fecthedData = await fetchData();


    this.setState({ data: fecthedData });

  }

  handleCountryChange = async (country) => {

    const fecthedData = await fetchData(country);

    this.setState({ data: fecthedData, country: country });

  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
