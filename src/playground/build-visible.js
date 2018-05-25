// let state = "show"
//
// const onToggle = () => {
//   state === "hide" ? state = "show" : state = "hide" ;
//   renderApp()
// }
//
// const renderApp = () => {
//   const template =
//   <div>
//     <h1> Toggle </h1>
//     <button onClick = {onToggle}> {state} </button>
//     {
//       state === "hide" && <p> Some very important info that should not be displayed </p>
//     }
//   </div>;
//   ReactDOM.render(template, document.getElementById("app"))
// }
//
// renderApp()

let state = false

const onToggle = () => {
  state = !state ;
  renderApp()
}

const renderApp = () => {
  const template =
  <div>
    <h1> Toggle </h1>
    <button onClick = {onToggle}> {state ? "Hide" : "Show"} </button>
    {
      state && <p> Some very important info that should not be displayed </p>
    }
  </div>;
  ReactDOM.render(template, document.getElementById("app"))
}

renderApp()
