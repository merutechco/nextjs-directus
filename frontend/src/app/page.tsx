import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

async function getGlobals() {
	return directus.request(readItems('global'));
}

const Home = async () => {
  const global = await getGlobals() as unknown as {title: string, description: string};
  return (
    <div>
			<h1>{global.title}</h1>
			<p>{global.description}</p>
		</div>
  );
}

export default Home;