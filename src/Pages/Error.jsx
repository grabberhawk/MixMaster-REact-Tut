import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError()
  console.log(error)
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} />
          <h3>ohh!</h3>
          <p>We Can't Seem To Find Page You Are Looking For</p>
          <Link to="/">Back to Homepage</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>SomeThing Went Wrong</h3>
      </div>
    </Wrapper>
  )
}
export default Error
