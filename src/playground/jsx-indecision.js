const app = {
  title: "Indecision App",
  subtitle: "Get decided quickly!",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault(); // prevents full page refresh
  const option = e.target.elements.option.value;
  // all the form inputs are accessible through their name
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }// empty string is a falsy value
renderApp()
}

const removeOptions = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const chosenOption = app.options[randomNum];
  alert(chosenOption);

}

const renderApp = () => {
  const template =
  <div>
    <h1> {app.title} </h1>
    <h2> {app.subtitle} </h2>
    <button onClick = {onMakeDecision} disabled={app.options.length === 0}> What should I do ? </button>
    <ol>
      {
        app.options.map((option) => {
          return <li key={option}> {option }</li>
        } )
      }
    </ol>
    <button onClick = {removeOptions}> Remove all </button>

    <form onSubmit={onFormSubmit}>
      {/* if onFormSubmit() we call it, now we just want to reference it */}
      <input type="text" name="option" />

    <button>Add option</button>
    </form>
  </div>;

  ReactDOM.render(template, document.getElementById("app"))
}

renderApp()
