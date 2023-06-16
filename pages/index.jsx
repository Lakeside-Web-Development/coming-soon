import PageSection from "@/components/PageSection";
import { gql, GraphQLClient } from "graphql-request";

export default function Home({ page }) {
	return (
		<div className='font-inter flex flex-col items-center justify-center w-screen h-screen'>
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
							emailAddress
							phoneNumber
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

export async function getStaticProps() {
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
