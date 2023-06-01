// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react'

export function App() {
  const a = false
  return (
    <div>
      {a && (
        <>
          <div></div>
          <img className="123" alt="123" />
        </>
      )}
      <span
        className='123'
        style={{ color: 'red' }}
      >
        hello
      </span>
    </div>
  )
}
