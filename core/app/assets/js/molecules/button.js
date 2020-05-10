import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
		hideText: PropTypes.bool,
		icon: PropTypes.string,
		tooltip: PropTypes.string,
		id: PropTypes.string,
		className: PropTypes.string,
		onClick: PropTypes.func,
	};

	static defaultProps = {
		id: '',
		className: '',
	};

	getCssId() {
		return this.props.id;
	}

	getClassName() {
		return this.props.className;
	}

	getIcon() {
		if ( this.props.icon ) {
			const tooltip = this.props.tooltip || this.props.text;
			const icon = <i className={ this.props.icon } aria-hidden="true" title={ tooltip } />;
			let screenReaderText = '';

			if ( this.props.hideText ) {
				screenReaderText = <span className="elementor-screen-only" >{ tooltip }</span>;
			}

			return (
				<Fragment>
					{ icon }
					{ screenReaderText }
				</Fragment>
			);
		}
		return '';
	}

	getText() {
		return this.props.hideText ? '' : this.props.text;
	}

	render() {
		const attributes = {},
			id = this.getCssId(),
			className = this.getClassName(),
			onClick = this.props.onClick;

		// Add attributes only if they are not empty.
		if ( id ) {
			attributes.id = id;
		}
		if ( className ) {
			attributes.className = className;
		}
		if ( onClick ) {
			attributes.onClick = onClick;
		}

		return (
			<div { ...attributes }>
				{ this.getIcon() }
				{ this.getText() }
			</div>
		);
	}
}
