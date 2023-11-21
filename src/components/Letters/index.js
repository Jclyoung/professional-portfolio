import './index.scss'

const Letters = ({charClass, charArray, indx}) => {
  return(
    <span>
      {
        charArray.map( ( char, i ) => (
          <span key={char + i } className={`${charClass} _${i + indx}`}>
            {char}
          </span> 
        )
        )
      }
    </span>
  )
  
}


export default Letters;
