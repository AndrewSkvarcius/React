const Person = (props) => {
    let vote = props.age >= 18 ? "Vote it up" : "Maybe next year"

    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person:</p><ul>
                <li>Name: {props.name.slice(0, 6)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies
                    {hobbies}
                </ul>
            </ul><h3>{vote}</h3>
        </div>
    )
} 