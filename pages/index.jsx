import PageSection from '@/components/PageSection';
import { gql, GraphQLClient } from 'graphql-request';
import Head from 'next/head';

export default function Home({ page }) {
  return (
    <>
      <Head>
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://lakesidewebdev.com/' />
        <meta
          property='og:title'
          content='Professional Web Design - Harrison, MI - With You From Concept To Code: Lakeside Web Development'
        />
        <meta
          property='og:description'
          content='Crafting exceptional websites tailored to your needs. Expertise in design, development, and optimization. Contact us today!'
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
          content='Crafting exceptional websites tailored to your needs. Expertise in design, development, and optimization. Contact us today!'
        />
      </Head>
      <div className='font-inter mt-[20vh] flex flex-col justify-center items-center'>
        {page.comingSoon.comingSoonSections.map((section) => (
          <PageSection key={section.id} section={section} />
        ))}
      </div>
    </>
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
      'content-type': 'application/json',
      authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
  const page = await client.request(query);
  return {
    props: { page },
  };
}
