import React, { Component } from 'react'
import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

class Button extends Component {

	static propTypes = {
		onClick: React.PropTypes.func,

		active: React.PropTypes.bool,

    type: React.PropTypes.oneOf([
      'default', 'primary', 'success', 'danger',
    ]),

    size: React.PropTypes.oneOf([
      'extra-small',
    ]),

    /**
     * If the button is filled in with a solid colour or not, defaults to false.
     * Note: the default type does not have a solid version.
     * TODO maybe make this the default and outline: true optional
     */
    //solid: React.PropTypes.bool,
	};

  static propTypes = {
    //solid: false,
  };

	render = () => {
		var { onClick, className, type, style, size } = this.props

    var c = (className, className2) => className + className2;

    var buttonClass = 'button'
    if (type == 'primary')
      buttonClass = c(buttonClass, 'primary')
    if (type == 'success')
      buttonClass = c(buttonClass, 'success')
    if (type == 'danger')
      buttonClass = c(buttonClass, 'danger')
    buttonClass = c(buttonClass, className)

    if (size == 'extra-small')
      buttonClass = c(buttonClass, 'extraSmall')

		return <button 
			type="button" 
			className={buttonClass}
			onClick={onClick}
      style={style}
		>
			{this.props.children}
		</button>
	}
}

jss.createStyleSheet({
	button: {
		display: 'inline-block',
    padding: '6px 12px',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.42857143,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundImage: 'none',
    border: '1px solid transparent',
		backgroundColor: '#ffffff',
    borderColor: '#c8c7cc',
    color: '#8e8e93',
		minWidth: 120,
		transition: 'all 0.3s ease 0s',
    backgroundImage: 'none',
    boxShadow: 'none',
    outline: 'none',
    position: 'relative',
    borderRadius: 2,
    marginRight: 10,
    ':hover': {
    	borderColor: '#bbbac0',
    },
    ':active': {
	    backgroundColor: '#f8f8f8',
	    borderColor: '#d5d4d8',
	    color: '#5b5b60',
	  }
  },
  extraSmall: {
    padding: '1px 5px',
    fontSize: 12,
    lineHeight: 1.5,
    minWidth: 'auto',
  },
  primary: {
    backgroundColor: '#58748B',
    borderColor: '#58748B',
    color: '#ffffff',
    ':hover': {
      backgroundColor: '#718ea5',
      borderColor: '#718ea5',
      color: '#ffffff',
    },
    ':active': {
      backgroundColor: '#4e677b',
      borderColor: '#4e677b',
      color: '#ffffff',
    },
  },
  success: {
    backgroundColor: '#5cb85c',
    borderColor: '#5cb85c',
    color: '#ffffff',
    ':hover': {
      backgroundColor: '#80c780',
      borderColor: '#80c780',
      color: '#ffffff',
    },
    ':active': {
      backgroundColor: '#4cae4c',
      borderColor: '#4cae4c',
      color: '#ffffff',
    },
  },
  danger: {
    backgroundColor: '#d43f3a',
    borderColor: '#d43f3a',
    color: '#ffffff',
    ':hover': {
      backgroundColor: '#dd6864',
      borderColor: '#dd6864',
      color: '#ffffff',
    },
    ':active': {
      backgroundColor: '#c9312c',
      borderColor: '#c9312c',
      color: '#ffffff',
    },
  },
}, {named: false}).attach()

export default Button