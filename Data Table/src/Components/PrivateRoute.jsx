
const PrivateRoute = ({Children}) => {
  const isAuth = localStorage.getItem("token")

  if(!isAuth){
    window.location.href="/login"
  }
  else{
    return Children
  }
}
export default PrivateRoute