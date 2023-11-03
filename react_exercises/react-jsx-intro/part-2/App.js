const App = () => (
    
    <div>
 <Tweet 
 username="Bob69"
 name="Bob"
 date="11/1/23"
 message="This is Bob's message"
 />
  <Tweet 
 username="mike23"
 name="Mike"
 date="11/1/23"
 message="This is Mike's message"
 />
  <Tweet 
 username="Hotboi1er"
 name="Ricky"
 date="11/1/23"
 message="This is Ricky's message"
 />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))