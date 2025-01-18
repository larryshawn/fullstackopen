const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {

  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  )
}

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const contentParts = {
    part1: 'Fundamentals of React' ,
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content {...contentParts} />
      <Total {...contentParts} />
    </div>
  )
}

export default App