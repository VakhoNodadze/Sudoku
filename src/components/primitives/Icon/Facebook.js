import React from 'react'

export const Facebook = ({size}) => {
  const style1 = {
    fill: '#1977f3'
  }
  const style2 = {
    fill: '#fefefe'
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
      <g id="Layer_1-2" data-name="Layer_1">
        <path
          className="cls-1"
          style={style1}
          d="M883,500c0-211.51-171.49-383-383-383S117,288.49,117,500c0,191.15,140,349.61,323.16,378.37V610.74H342.89V500h97.27V415.6c0-96,57.2-149,144.67-149,41.9,0,85.75,7.49,85.75,7.49v94.25H622.26c-47.56,0-62.42,29.52-62.42,59.84V500H666.05l-17,110.74H559.84V878.37C743,849.66,883,691.2,883,500Z"
        />
        <path
          className="cls-2"
          style={style2}
          d="M649.09,610.74l17-110.74H559.84V428.15c0-30.27,14.81-59.84,62.42-59.84h48.32V274.06s-43.85-7.49-85.75-7.49c-87.47,0-144.67,53-144.67,149V500H342.89V610.74h97.27V878.37A384.54,384.54,0,0,0,500,883a392,392,0,0,0,59.84-4.63V610.74Z"
        />
      </g>
    </svg>

  )
}

export default Facebook
