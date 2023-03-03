import React from 'react'
import AboutDtm from './dtm.component'
import AboutEcMembers from './ec.component'
import AboutTm from './tm.component'
import TmFeatures from './tmFeatures.component'

const About = () => (
	<div>
		<AboutTm />
		<AboutDtm />
		<TmFeatures />
		<AboutEcMembers />
	</div>
)

export default About
