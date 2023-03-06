import { z } from 'zod'
import cmsService from '@/services/cms.service'
import FaqComponent from './faq.component'
import type { Metadata } from 'next'

const faqSchema = z.object({
	data: z.object({
		items: z.array(
			z.object({
				fields: z.object({
					question: z.string(),
					answer: z.string(),
					type: z.string(),
				}),
				sys: z.object({
					id: z.string(),
				}),
			})
		),
	}),
})

export type IFaqSchema = z.infer<typeof faqSchema>

const faqPage = async () => {
	const { data } = (await cmsService.getFaq()) as unknown as IFaqSchema
	return <FaqComponent data={data} />
}
export const metadata: Metadata = {
	title: 'FAQ',
}
export default faqPage
