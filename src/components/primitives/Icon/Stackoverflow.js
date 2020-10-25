import React from 'react'

export const Stackoverflow = ({size}) => {
  const style1 = {
    fill: '#bcbbbb'
  }
  const style2 = {
    fill: '#f48024'
  }
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      width={size || 32}
      height={size || 32}
    >
      <path
        className="cls-1"
        style={style1}
        d="M713.43,782.17V585.24h66.24V847.51H189.79V585.24h65.34V782.17Z"
      />
      <path
        className="cls-2"
        style={style2}
        d="M327.64,567.34,649,634.47,662.41,570,341.06,502.89Zm42.07-154L666.89,552.12l27.74-59.07L397.46,353.41Zm82.35-145.9L704.48,476.93l42.07-50.12L494.13,217.35ZM615,112.62,562.16,152l196,263.16L811,375.79ZM320.48,715.93H648.09V650.59H320.48Z"
      />
    </svg>
  )
}

export default Stackoverflow
