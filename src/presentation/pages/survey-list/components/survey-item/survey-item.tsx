import { SurveyModel } from '@/domain/models'
import { Icon, IconName } from '@/presentation/components'
import React from 'react'
import Styles from './survey-item-styles.scss'

type Props = {
  survey: SurveyModel
}

const SurveyItem: React.FC<Props> = ({ survey }: Props) => {
  return (
    <div className={Styles.surveyItemWrap}>
      <li>
        <div className={Styles.surveyContent}>
          <Icon className={Styles.iconWrap} iconName={IconName.thumbUp} />
          <time>
            <span data-testid="day" className={Styles.day}>
              {survey.date.getDate()}
            </span>
            <span data-testid="month" className={Styles.month}>
              {survey.date.toLocaleString('pt-BR', { month: 'short' }).replace('.', '')}
            </span>
            <span data-testid="year" className={Styles.year}>
              2020
            </span>
          </time>
          <p data-testid="question">{survey.quentions}</p>
        </div>
        <footer>Ver Resultado</footer>
      </li>
    </div>
  )
}

export default SurveyItem
