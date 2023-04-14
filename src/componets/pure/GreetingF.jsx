import React from "react";
import PropTypes from "prop-types";

function GreetingF(props) {
  return (
    <div>
      <div>
        <h1> Hola {props.name} desde componente funcional </h1>
        <h2>Tu edad es de: {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    </div>
  );
}

GreetingF.propTypes = {};

export default GreetingF;
