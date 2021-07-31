import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Thing, Heading, Wrapper } from "./components/About";
import { Form, Button } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ReactApexCharts from "react-apexcharts";

// const series= [{
//   name: "Desktops",
//   type: 'line',
//   data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
// },
// {
//   name: "laptops",
//   type: 'bar',
//   data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
// }];

// const options= {
// chart: {
//   height: 350,
//   type: 'line',
//   zoom: {
//     enabled: true
//   }
// },
// dataLabels: {
//   enabled: true
// },
// stroke: {
//   curve: 'smooth'
// },
// title: {
//   text: 'Product Trends by Month',
//   align: 'left'
// },
// grid: {
//   row: {
//     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//     opacity: 1
//   },
// },
// xaxis: {
//   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
// }
// };

// const App = () => (
//   <>
//     <div className="container col-md-5">
//     <ReactApexCharts options={options} series={series} height={350} />
//     </div>

//   </>
// );
// export default App;

// function App() {
//   const [formdata, setFormdata] = useState({ email: "", password: "" });
//   const handleChange = (e) => {
//     console.log(e.target.name,e.target.value);
//     setFormdata({...formdata,[e.target.name]:e.target.value})
//  }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formdata);
//  }
//  console.log(formdata);

//   return (
//     <>
//       <div className="container mt-4">
//         <Form onSubmit={(e)=>{handleSubmit(e)}}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>{handleChange(e)}} />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={(e)=>{handleChange(e)}}
//             />
//           </Form.Group>

//           <Button variant="info" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     </>
//   );
// }

// export default App;

// function App() {
//   const inputEl = useRef(null);
// const onButtonClick = () => {
//   // `current` points to the mounted text input element
//   inputEl.current.value = "100";
// };
//   return (
//   <>
//  <div className="container mt-4">
//  <input ref={inputEl} type="text" value='' />
//     <button onClick={onButtonClick}>Focus the input</button>
//  </div>
//   </>
//   );
// }
// export default App;
// function App() {
//   const [count, setCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   const prevCountRef = useRef();
//   const onButtonClick = () => {
//     // `current` points to the mounted text input element
//     setCount(count - 1);
//   };
//   const onButtonClick2 = () => {
//     // `current` points to the mounted text input element
//     setCount(count + 1);
//   };
//   useEffect(() => {
//     prevCountRef.current = count;
//     console.log(prevCountRef.current);
//     setTimeout(() => {
//       setLoading(false)
//     }, 5000);
//   });
//   console.log(prevCountRef.current);
//   const prevCount = prevCountRef.current;

//   if (loading) {
//     return (
//       <>
//         <h1>
//          Loading...</h1>
//       </>
//     );
//   } else {
//     return (
//       <>
//        <h1>Loaded</h1>
//       </>
//     );
//   }
// }
// export default App;

function App() {
  const [data, setData] = useState();

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="container mt-4">
        {data?.map((d, i) => {
          return d.completed === true ? (
            <div key={i}>
              <span>{d.title}</span>
              <br />
              <span>{`Completed:- ${d.completed}`}</span>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
}
export default App;

// function App() {
//   const [data, setData] = useState();

//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos/")
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   console.log(data)
//   return (
//     <>
//       <div className="container mt-4">
//         {data?.map((d, i) => {
//           return(
//           <div key={i}>
//             <span>{d.title}</span>
//             <br/>
//             <span className={d.completed===true?'text-success':'text-danger'}>{`Completed:- ${d.completed}`}</span>
//           </div>);
//         })}
//       </div>
//     </>
//   );
// }
// export default App;

// function App() {
//   return (
//     <>
//       <Wrapper>
//       <Thing>Hello world!</Thing>
//         <Heading inputColor="red"> hello world heading</Heading>
//       </Wrapper>
//     </>
//   );
// }
// export default App;
