import React, { useEffect, useRef } from 'react'
import PropTypes from "prop-types";


const useOutsideAlerter = (ref, onClickOutside) => {

    const handleClickOutside =(event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside()
      }
    }
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    })
  }


const OutsideAlerter = (props) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.onClickOutside);
  
    return <div ref={wrapperRef}>{props.children}</div>;
  }
  
  OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired
  }
  
  export default OutsideAlerter
  