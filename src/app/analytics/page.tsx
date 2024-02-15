import { analytics } from "@/utils/analytics";

const Page = async () => {

  const pageview = await analytics.retrieve('pageview', "");

  return <pre>{JSON.stringify(pageview)}</pre>
}

export default Page