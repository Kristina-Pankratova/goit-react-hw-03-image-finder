import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  handleKeydown = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div>{this.props.children}</div>
        <div className={s.modal}>
          <img src={this.props.largeImage} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = PropTypes.shape({
  src: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.element,
}).isRequired;
