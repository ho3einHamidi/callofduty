import Link from "next/link"
function Login() {
  return (
    <div>
      <p>Login</p>
      <label htmlFor="input">UserName: </label>
      <input type="text" />
      <label htmlFor="input">Password: </label>
      <input type="password" />
      <Link href={"/signup"} >Sign up</Link>
    </div>
    

  )
}

export default Login