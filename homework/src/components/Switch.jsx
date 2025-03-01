import React from 'react';
import styled from 'styled-components';

export const Switch = () => {
    return (
        <StyledWrapper>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
            </label>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #d4acfb;
    border-radius: 50px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    left: 0.3em;
    bottom: 0.3em;
    background-color: white;
    border-radius: 50px;
    box-shadow: 0 0px 20px rgba(0,0,0,0.4);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .switch input:checked + .slider {
    background: #b84fce;
  }

  .switch input:focus + .slider {
    box-shadow: 0 0 1px #b84fce;
  }

  .switch input:checked + .slider:before {
    transform: translateX(1.6em);
    width: 2em;
    height: 2em;
    bottom: 0;
  }`;
