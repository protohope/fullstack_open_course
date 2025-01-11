const Header = ({course}) => {
    return (
      <>
        <h1>{course.name}</h1>
      </>
    );
  }
  
const Part = ({part}) => {
    return (
      <>
        <p>
          {part.name} {part.exercises}
        </p>
      </>
    );
  }
  
const Content = ({course}) => {
    const parts = course.parts
    return (
      <>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </>
    );
  }
  
const Total = ({course}) => {
    const total = course.parts.map(
      part => part.exercises
    ).reduce((partialSum, exercises) => partialSum + exercises, 0)
    return (
      <p>
        <b>
          total of {total} exercises
        </b>
      </p>
    )
  }
  
const Course = ({course}) => {
    return (
        <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
        </div>
    )
}

export default Course