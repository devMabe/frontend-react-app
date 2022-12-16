export default function registerPage() {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Name..." />
      <label htmlFor="lastname">Lastname</label>
      <input type="text" placeholder="Lastname..." />
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Email..." />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="*************" />
      <label htmlFor="confirmpassword">Confirm Password</label>
      <input type="password" placeholder="*************" />
      <button>Create acount</button>
    </div>
  )
}
