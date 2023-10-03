import loadSerializableQuery from "@/relay/loadSerializableQuery";
import ServicesQueryNode, {
  ServicesQuery,
} from "../../__generated__/ServicesQuery.graphql";

import ServicesClientComponent from "@/components/ServicesClientComponent";
import Header from "@/components/Header";
import Landing from "@/components/Landing";

export default async function Home() {
  const preloadedQuery = await loadSerializableQuery<
    typeof ServicesQueryNode,
    ServicesQuery
  >(ServicesQueryNode.params, {});

  return (
    <>
      <Header />
      <main className="pt-20">
        <Landing />
        <ServicesClientComponent preloadedQuery={preloadedQuery} />
      </main>
    </>
  );
}

export const revalidate = 0;
