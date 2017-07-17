import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {oneCourse, twoCourses, emptyCourse} from './sample_data.js'

/*
  Display the data being as simply as necessary

  props: courses (array of courses)

    course (object):
        name - string
        students - array of students


    student (object):
          name - string
          grade - number
          iepDate - string

*/

class App extends Component {

  render() {
    var courses = twoCourses;
    console.log(JSON.stringify(courses));
    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/css/materialize.min.css"/>
          <h1>Display Students</h1>
    </div>
    );
  }
}

export default App;
