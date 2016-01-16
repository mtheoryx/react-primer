import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {data: [
      { id: 1, city: 'Baltimore', state: 'MD', name: 'Baltimore Ravens' },
      { id: 2, city: 'Cincinnati', state: 'OH', name: 'Cincinnati Bengals' },
      { id: 3, city: 'Cleveland', state: 'OH', name: 'Cleveland Browns' },
      { id: 4, city: 'Pittsburgh', state: 'PA', name: 'Pittsburgh Steelers' },
      { id: 5, city: 'Chicago', state: 'IL', name: 'Chicago Bears' },
      { id: 6, city: 'Detroit', state: 'MI', name: 'Detroit Lions' },
      { id: 7, city: 'Green Bay', state: 'WI', name: 'Green Bay Packers' },
      { id: 8, city: 'Minneapolis', state: 'MN', name: 'Minnesota Vikings' },
      { id: 9, city: 'Houston', state: 'TX', name: 'Houston Texans' },
      { id: 10, city: 'Indianapolis', state: 'IN', name: 'Indianapolis Colts' },
      { id: 11, city: 'Jacksonville', state: 'FL', name: 'Jacksonville Jaguars' },
      { id: 12, city: 'Nashville', state: 'TN', name: 'Tennessee Titans' },
      { id: 13, city: 'Atlanta', state: 'GA', name: 'Atlanta Falcons' },
      { id: 14, city: 'Charlotte', state: 'NC', name: 'Carolina Panthers' },
      { id: 15, city: 'New Orleans', state: 'LA', name: 'New Orleans Saints' },
      { id: 16, city: 'Tampa Bay', state: 'FL', name: 'Tampa Bay Buccaneers' },
      { id: 17, city: 'Buffalo', state: 'NY', name: 'Buffalo Bills' },
      { id: 18, city: 'Miami', state: 'FL', name: 'Miami Dolphins' },
      { id: 19, city: 'Boston', state: 'MA', name: 'New England Patriots' },
      { id: 20, city: 'East Rutherford', state: 'NJ', name: 'New York Jets' },
      { id: 21, city: 'Dallas', state: 'TX', name: 'Dallas Cowboys' },
      { id: 22, city: 'East Rutherford', state: 'NJ', name: 'New York Giants' },
      { id: 23, city: 'Philadelphia', state: 'PN', name: 'Philadelphia Eagles' },
      { id: 24, city: 'Washington', state: 'DC', name: 'Washington Redskins' },
      { id: 25, city: 'Denver', state: 'CO', name: 'Denver Broncos' },
      { id: 26, city: 'Kansas City', state: 'MO', name: 'Kansas City Chiefs' },
      { id: 27, city: 'Oakland', state: 'CA', name: 'Oakland Raiders' },
      { id: 28, city: 'San Diego', state: 'CA', name: 'San Diego Chargers' },
      { id: 29, city: 'Phoenix', state: 'AZ', name: 'Arizona Cardinals' },
      { id: 30, city: 'San Francisco', state: 'CA', name: 'San Franciso 49ers' },
      { id: 31, city: 'Seattle', state: 'WA', name: 'Seattle Seahawks' },
      { id: 32, city: 'St. Louis', state: 'MO', name: 'St. Louis Rams' }
    ]}
  }
  render(){
    let rows = this.state.data.map( team => {
      return <TeamRow key={team.id} data={team} />
    });

    return <table>
      <tbody>{rows}</tbody>
    </table>
  }
}

const TeamRow = (props) => {
  return <tr>
    <td>{props.data.name}</td>
    <td>{props.data.city},</td>
    <td>{props.data.state}</td>
  </tr>
};

export default App