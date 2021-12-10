import react from 'React'

const Butterfly = () => {
  const way = "M0 80 Q200 20, 400 80"
  return (
    <div className='butterflyContainer'>
      <svg class='svg-path' width="400" height="100" xmlns="http://www.w3.org/2000/svg">
          <path id='Road' d={way} fill='none' stroke='black' />
      </svg>
    </div>
  )
}

export default Butterfly()