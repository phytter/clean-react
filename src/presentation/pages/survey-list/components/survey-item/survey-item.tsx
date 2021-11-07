import { Icon, IconName } from '@/presentation/components'
import React from 'react'
import Styles from './survey-item-styles.scss'

const SurveyItem: React.FC = () => {
  return (
    <div className={Styles.surveyItemWrap}>
      <li>
        <div className={Styles.surveyContent}>
          <Icon className={Styles.iconWrap} iconName={IconName.thumbUp} />
          <time>
            <span className={Styles.day}>22</span>
            <span className={Styles.month}>03</span>
            <span className={Styles.year}>2020</span>
          </time>
          <p>Qual é seu framework web favorito?</p>
        </div>
        <footer>Ver Resultado</footer>
      </li>
    </div>
  )
}

export default SurveyItem