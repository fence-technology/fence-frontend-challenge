import Conectivity1 from '@public/images/ilustrations/conectivity1'
import Conectivity2 from '@public/images/ilustrations/conectivity2'
import Conectivity3 from '@public/images/ilustrations/conectivity3'
import Conectivity4 from '@public/images/ilustrations/conectivity4'
import Conectivity5 from '@public/images/ilustrations/conectivity5'
import Document from '@public/images/ilustrations/document'
import Drawdown from '@public/images/ilustrations/drawdown'
import ECommerce1 from '@public/images/ilustrations/e-commerce1'
import ECommerce2 from '@public/images/ilustrations/e-commerce2'
import ECommerce3 from '@public/images/ilustrations/e-commerce3'
import ECommerce4 from '@public/images/ilustrations/e-commerce4'
import ECommerce5 from '@public/images/ilustrations/e-commerce5'
import Messages1 from '@public/images/ilustrations/messages1'
import Messages2 from '@public/images/ilustrations/messages2'
import Messages3 from '@public/images/ilustrations/messages3'
import Messages4 from '@public/images/ilustrations/messages4'
import Messages5 from '@public/images/ilustrations/messages5'
import NoResults from '@public/images/ilustrations/no-results'
import Repayment from '@public/images/ilustrations/repayment'
import Simulation from '@public/images/ilustrations/simulation'
import Social1 from '@public/images/ilustrations/social1'
import Social2 from '@public/images/ilustrations/social2'
import Social3 from '@public/images/ilustrations/social3'
import Wallet from '@public/images/ilustrations/wallet'
import WalletBroken from '@public/images/ilustrations/wallet-broken'
import React, { CSSProperties } from 'react'

export const icons = {
  Repayment,
  Document,
  Drawdown,
  NoResults,
  Simulation,
  Conectivity1,
  Conectivity2,
  Conectivity3,
  Conectivity4,
  Conectivity5,
  ECommerce1,
  ECommerce2,
  ECommerce3,
  ECommerce4,
  ECommerce5,
  Social1,
  Social2,
  Social3,
  Wallet,
  WalletBroken,
  Messages1,
  Messages2,
  Messages3,
  Messages4,
  Messages5
} as const

type IconKeys = keyof typeof icons

export interface Props {
  src: IconKeys
  style?: CSSProperties
  className?: string
}

const Illustration: React.FC<Props> = ({ src, style, className }) => {
  const IlustrationComponent = icons[src]

  if (!IlustrationComponent) {
    return null
  }

  return <IlustrationComponent style={style} className={className} />
}

export default Illustration
