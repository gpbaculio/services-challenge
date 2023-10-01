import loadSerializableQuery from "@/relay/loadSerializableQuery";
import ServicesQueryNode, {
  ServicesQuery,
} from "../../__generated__/ServicesQuery.graphql";

import ServicesClientComponent from "@/components/ServicesClientComponent";

export default async function Home() {
  const preloadedQuery = await loadSerializableQuery<
    typeof ServicesQueryNode,
    ServicesQuery
  >(ServicesQueryNode.params, {});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ServicesClientComponent preloadedQuery={preloadedQuery} />
    </main>
  );
}

export const revalidate = 0;
