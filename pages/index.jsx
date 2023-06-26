import PageSection from "@/components/PageSection";
import { gql, GraphQLClient } from "graphql-request";
import Head from "next/head";

export default function Home({ page }) {
	return (
		<div className='font-inter flex flex-col items-center justify-center w-screen h-screen'>
			<Head>
				<title>Lakeside Web Development</title>
				<meta name='title' content='Lakeside Web Development' />
				<meta
					name='description'
					content='Lakeside Web Development: Crafting exceptional websites tailored to your needs. Expertise in design, development, and optimization.'
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://lakesideweb.com' />
				<meta property='og:title' content='Lakeside Web Development' />
				<meta
					property='og:description'
					content='Lakeside Web Development: Crafting exceptional websites tailored to your needs. Expertise in design, development, and optimization.'
				/>
				<meta property='og:image' content={page.comingSoon.seoImage.url} />

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:site' content='@lakesidewebdev' />
				<meta property='twitter:title' content='Lakeside Web Development' />
				<meta property='twitter:image' content={page.comingSoon.seoImage.url} />
				<meta
					property='twitter:image:alt'
					content='Lakeside Web Development logo'
				/>
				<meta
					property='twitter:description'
					content='Lakeside Web Development: Crafting exceptional websites tailored to your needs. Expertise in design, development, and optimization.'
				/>
			</Head>
			{page.comingSoon.comingSoonSections.map((section) => (
				<PageSection key={section.id} section={section} />
			))}
		</div>
	);
}

const query = gql`
	query {
		comingSoon {
			__typename
			id
			name
			seoImage {
				url
			}
			slug
			comingSoonSections {
				... on ComingSoonHeaderRecord {
					__typename
					id
					bigTitle
					smallTitle
				}
				... on FooterRecord {
					__typename
					id
					footerContent {
						... on MostRecentUpdateRecord {
							__typename
							id
							important
							title
							update
							author
							authorTitle
							date
						}
						... on ContactUsSectionRecord {
							__typename
							id
							title
							contactMethods {
								icon
								content
								href
								openInNewTab
							}
							socialMediaPlatforms {
								icon
								name
								link
							}
						}
					}
				}
			}
		}
	}
`;

export async function getServerSideProps() {
	const endpoint = process.env.API_URL;
	const client = new GraphQLClient(endpoint, {
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${process.env.API_KEY}`,
		},
	});
	const page = await client.request(query);
	return {
		props: { page },
	};
}
