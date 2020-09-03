import React from 'react'

import style from './style.scss'

const Title = ({ mode, text }) => <div className={style[mode]}>{text}</div>

export default Title
