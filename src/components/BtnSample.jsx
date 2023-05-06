import { css } from '@emotion/css';

export default function BtnSample(props) {
  const {styles, onClick ,children} = props;
  return (
    <button className={classes.root(styles)} onClick={onClick}>
      {children}</button>
    
  )
}

//변수명 지정
const classes = {
  root:(props) => css({ // root:변수, import한 css 함수 할당
    position: `${props.position}`,
    left: `${props.left}px`,
    top: `${props.top}px`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    background: `${props.background}`
  })
}



