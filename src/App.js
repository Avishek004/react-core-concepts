// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    // var person1 = {
    //     name: "Avishek Talukdar",
    //     Age: 20,
    //     Job: "Web Developer"
    // }
    // var person2 = {
    //     name: "Tanmoy Talukdar",
    //     Age: 20,
    //     Job: "Web Developer"
    // }
    // var style = {
    //     color: "red",
    //     backgroundColor: "yellow"
    // }
    const level = ['zero', 'one', 'two', 'three']
    const products = [
        { name: 'Photoshop', price: '$90.99' },
        { name: 'Illustrator', price: '$50.99' },
        { name: 'Lightroom', price: '$30.99' }
    ]
    const productNames = products.map(product => product.name);
    console.log(productNames);
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit Done <code> src / App.js </code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>My First React paragraph</p>
                <h3 style={style}>Myself: {person1.name + " " + person1.Age}</h3>
                <h3 style={{ backgroundColor: 'cyan', color: 'yellow' }}>My Partner: {person2.name + " " + person2.Age}</h3> */}
                {/* <Product name={products[0].name} price={products[0].price}></Product> */}
                <Counter></Counter>
                <Users></Users>
                <ul>
                    {
                        level.map(level => <li>{level}</li>)
                    }
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                    <li>{level[0]}</li>
                    <li>{level[1]}</li>
                    <li>{level[2]}</li>
                    <li>{level[3]}</li>
                </ul>
                {
                    products.map(pd => <Product product={pd}></Product>)
                }
                <Product product={products[0]}></Product>
                <Product product={products[1]}></Product>
                <Product product={products[2]}></Product>
                <Person name="Rubel Mia" id={level[0]}></Person>
                <Person name="Babul Mia" id="Intermediate"></Person>
                <Person name="Kamal Mia" id={level[2]}></Person>
                <Person name="Jamal Mia" id="Pro Max"></Person>
            </header>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h3>Dynamic Users: {users.length}</h3>
            <ul>
                {
                    users.map(user => <li>{user.name},{user.phone}</li>)
                }
            </ul>
        </div>
    )
}

function Product(props) {
    const productStyle = {
        border: "1px solid gray",
        borderRadius: "5px",
        backgroundColor: "lightgrey",
        height: "200px",
        width: "200px",
        float: "left"
    }
    const { name, price } = props.product;
    console.log(name, price)
    return (
        <div style={productStyle}>
            <h3>{props.product.name}</h3>
            {/* <h3>{name}</h3> */}
            <h5>{props.product.price}</h5>
            {/* <h5>{price}</h5> */}
            <button>Buy Now</button>
        </div>
    )
}

function Person(props) {
    const personStyle = {
        border: "2px solid red", padding: '10px', margin: '10px'
    }
    return (
        <div style={personStyle}>
            <h1>My Name: {props.name}</h1>
            <h3>Becoming a {props.id} Web Developer</h3>
        </div>
    );
}

export default App;