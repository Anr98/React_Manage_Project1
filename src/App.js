import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './Component/Customer';


const customers = [
  {
  'id': '1',
  'image':'https://placeimg.com/164/164/1',
  'name':'이지훈',
  'birthday':"960717",
  'gender':"남자",
  'job':"대학생"
  },
  {
    'id': '2',
    'image':'https://placeimg.com/164/164/2',
    'name':'안지훈',
    'birthday':"960717",
    'gender':"남자",
    'job':"대학생"
    },
    {
      'id': '3',
      'image':'https://placeimg.com/164/164/3',
      'name':'이연',
      'birthday':"932717",
      'gender':"여자",
      'job':"의사"
      }
 ]

class App extends Component {
  render(){
    return (
      <div>
        {  //map
        customers.map(c => {return (<Customer key={c.id} id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            
            />
          
          );
          }
        )
}
      </div>

      );
  }
}

export default App;
