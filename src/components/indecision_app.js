import React from 'react';
import AddOption from './add_option';
import Options from './options';
import Header from './header';
import Action from './action'
import OptionModal from './option_modal'

export default class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState({
      options: []
    })
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const chosenOption = this.state.options[randomNum];
    this.setState({
      selectedOption: chosenOption
    });
  };

  handleAddOption = (option) => {
    if (!option) {
        return 'Enter valid value to add option';
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  };

  handleCloseSelectModal = () => {
    this.setState({
        selectedOption: undefined
    })
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState({
          options: options
        })
      }
    } catch (e) {
      // Do nothing at all
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  };

  render() {
    const title= "Indecision"
    const subtitle= "Put your life in the hands of a computer"

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
          <div className="container">
            <Action
              hasOptions = {this.state.options.length > 0}
              handlePick = {this.handlePick}
            />
            <div className="option-block">
              <Options
                options={this.state.options}
                handleDeleteOptions= {this.handleDeleteOptions}
                handleDeleteOption= {this.handleDeleteOption}
               />
              <AddOption
                handleAddOption = {this.handleAddOption}
              />
            </div>
          </div>
        <OptionModal selectedOption={this.state.selectedOption}
          handleCloseSelectModal={this.handleCloseSelectModal}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}
