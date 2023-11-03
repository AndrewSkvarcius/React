const App = () => (
    
    <div>
 <Person 
  name="Bob"
  age={32}
  hobbies={["fishing", "sky diving", "all types of ill shit"]}
  />
  <Person 
  name="Pete"
  age={16}
  hobbies={["swimming", "chess", "laying pipe"]}
  />
  <Person 
  name="Bob"
  age={12}
  hobbies={["boxing", "being cool", "flying kites"]}
  />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))