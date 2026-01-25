import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <Navbar
  items={[
    { path: "/", label: "Home" },
    { path: "/docs", label: "Docs" },
  ]}
  buttons={[
    { label: "Login", path: "/login" },
    { label: "Register", path: "/register" },
  ]}
/>


      <main className="p-8 text-xl">Home Page</main>
    </>
  )
}

export default Home
