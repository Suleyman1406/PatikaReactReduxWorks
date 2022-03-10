import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const MonsterButton =(props)=>{
  const primary={backgroundColor: '#1790ff',padding: '5px 10px',color:'white',border:'none',margin:'40px'}
  const dashed={border: '1px  dashed ',padding: '5px 10px',margin:'40px',backgroundColor:'white'} 
  const def={border: '1px  solid',xpadding: '5px 10px',margin:'40px',backgroundColor:'white'}
  const text={border: 'none',padding: '5px 10px',margin:'40px',backgroundColor:'white',border: 'none'}
  const link={border: '1px  solid',padding: '5px 10px',margin:'40px',backgroundColor:'white',color: '#1790ff',border:'none'}
  let style;
  switch(props.type) {
    case 'primary':
      style=primary;
      break;
    case 'dashed':
      style=dashed;
      break;
    case 'text':
      style=text
      break;
    case 'link':
      style=link;
      break;
    default:
      style=def;
  }
  return <button style={style} {...props}>{props.text}</button>

}