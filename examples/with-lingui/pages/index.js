import Link from 'next/link'
import { Trans } from '@lingui/macro'
import withLang from '../components/withLang'
import LangSwitcher from '../components/LangSwitcher'
import styled from '@emotion/styled/macro'
const Red = styled.div`
color: red;
`
const Index = () =>console.log('test')||
  <Red>
    <Trans>Hello World.</Trans>
    <Link href='/two'><a><Trans>Go to page 2</Trans></a></Link>
    <br />
    <LangSwitcher />
  </Red>

export default withLang(Index)
