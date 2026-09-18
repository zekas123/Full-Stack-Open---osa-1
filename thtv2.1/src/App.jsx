
const Header = (props) =>{
    return(
      <h1>{props.course}</h1>
    )
  }


const Content = (props) =>{
  return(
    <div>
    <Part courseName={props.parts[0].courseName} tehtv={props.parts[0].tehtv} />
    <Part courseName={props.parts[1].courseName} tehtv={props.parts[1].tehtv} />
    <Part courseName={props.parts[2].courseName} tehtv={props.parts[2].tehtv} />
    </div>
  )
}

const Part = (props) =>{
  return (
    <p>{props.courseName} <br></br>tehtavat: {props.tehtv} </p>
  )

}


const Total = (props) =>{
  return(
    <p>Total: {props.tehtv1 + props.tehtv2 + props.tehtv3}</p>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const courses = [
    {courseName: 'Fundamentals of React', tehtv: 10 },
    {courseName: 'Using props to pass data', tehtv: 7 },
    {courseName: 'State of a component', tehtv: 14 }

  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={courses} />
      <Total tehtv1 = {courses[0].tehtv} tehtv2= {courses[1].tehtv} tehtv3 = {courses[2].tehtv}/>
    </div>
  )
}

export default App