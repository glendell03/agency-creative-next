import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Feature from "sections/feature";
import BusinessProfit from "sections/business-profit";
import Knowledge from "sections/knowledge";
import ClientFeedback from "sections/client-feedback";
import WorkFlow from "sections/workflow";
import Support from "sections/support";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="
Lorem ipsum dolor sit amet. 33 nihil dolorem et odit doloribus est nobis molestias quo numquam magni. Aut vero nesciunt sed molestias tenetur ad temporibus omnis. </p><p>Sed quasi optio ut accusamus exercitationem ut doloribus nihil est pariatur consequatur. Et assumenda veritatis est fugiat beatae et culpa totam et quibusdam consequatur id ducimus delectus sed labore assumenda. </p><p>Et architecto aliquam ut molestiae iure sit illum obcaecati sed doloribus eveniet 33 aliquid debitis. Ea nesciunt ducimus et maiores illum et perferendis vero sed magnam neque. Ut corrupti eius aut laborum amet nam voluptas consequuntur sit vitae reprehenderit ea alias facere ex voluptate repudiandae.
"
          title="Startup Agency Creative Landing"
        />
        <Banner />
        <Feature />
        <BusinessProfit />
        <Knowledge />
        <ClientFeedback />
        <WorkFlow />
        <Support />
      </Layout>
    </ThemeProvider>
  );
}
