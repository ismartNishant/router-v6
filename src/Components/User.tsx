import { useParams } from "react-router-dom"

const User = () => {
    const {userid} = useParams();
  return (
    <div>
      user id is :  {userid}
    </div>
  )
}

export default User
