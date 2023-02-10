


const Accounts = () => {
  return (
    <Router>

      <Routes>
         <Route path="/" element={<Home/>} />
         <Route  path="/accounts" element={<Home/>} />
         <Route  path="/create" element={<Home/>} />

      </Routes>



    </Router>
  )
}

export default App;
