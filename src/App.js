import logo from "./logo.svg";
import "./App.css";

const number = 5555;
// const singer = { name: "Zunaied Evean", job: "singer" };
// const singer2 = { name: "James", job: "singer2" };
const singers = [
  { name: "James", job: "singer" },
  { name: "Zunaied", job: "singer2" },
  { name: "Agun", job: "Sopno" },
  { name: "Shuvro", job: "Pathor" },
];

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};

function App() {
  const nayoks = [
    "Sajib",
    "Sourav",
    "Kawshar",
    "jashim",
    "Salman Shah",
    "Riyaz",
  ];
  return (
    <div className="App">
      {nayoks.map((nayok) => (
        <li>Name:{nayok}</li>
      ))}

      {/* {nayoks.map((nayok) => (
        <Person name={nayok}></Person>
      ))} */}

      {singers.map((singer) => (
        <Person name={singer.name}></Person>
      ))}

      {/* <Person name="Sajib" nayika="Shamima"></Person> */}
      {/* <Person name={nayoks[0]} nayika="Shamima"></Person> */}
      {/* <Person name="Sourav" nayika="Sarika"></Person> */}
      {/* <Person name={nayoks[1]} nayika="Sarika"></Person> */}
      {/* <Person name="Kawshar" nayika="Mukta"></Person> */}
      {/* <Person name={nayoks[2]} nayika="Mukta"></Person> */}
      <h5>New Component. YAY!!</h5>
      <p>Rock Mama React Mama!!</p>
      <Friend name="Shamima" phone="017548698"></Friend>
      <Friend name="Sarika" phone="0145897565"></Friend>
      <Friend name="Mukta" phone="01845697456"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>Name: {props.name}</h1>
      {/* <p>Nayika: {props.nayika}</p> */}
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className="container">
      {/* <h1>Name: Jhankar Mahbub</h1>
      <p>Job: Web Developer</p> */}
      <h1>Name: {props.name}</h1>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;

//-----------------------------------------------------------------
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1>JSX</h1>
//   <div className="container">
//     <h3>Hello Dude.React.How are you?</h3>
//   </div>
//   <div className="music">
//     <p>Name: {3333 + number}</p>
//     <p style={singerStyle}>
//       Name: {singer.name} {singer.job}
//     </p>
//     <p style={{ color: "blue", backgroundColor: "yellow" }}>
//       Name: {singer2.name} {singer2.job}
//     </p>
//   </div>
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
// </header>;
