import React from 'react'
import Styles from './item-empty-styles.scss'

const SurveyItemEmpty: React.FC = () => {
  return (
    <>
      <li className={Styles.surveyItemEmpty} />
      <li className={Styles.surveyItemEmpty} />
      <li className={Styles.surveyItemEmpty} />
      <li className={Styles.surveyItemEmpty} />
    </>
  )
}

export default SurveyItemEmpty
