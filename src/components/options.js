import React from 'react';
import Option from './option'

const Options = (props) => (
  <div>
      <div className="option-block-header">
        <h3 className="option-block-header__title">Your options </h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
          > Remove all options</button>
      </div>

    { props.options.length === 0 && <p className="option-block__message"> Please add option </p>}

    {
      props.options.map((option, index) => (
      <Option
        key={option}
        option={option}
        count={index+1}
        handleDeleteOption={props.handleDeleteOption}
      />
    )
  )
    }
  </div>
);

export default Options
