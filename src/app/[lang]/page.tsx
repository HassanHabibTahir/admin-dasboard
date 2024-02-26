import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const Home = async function ({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <>
      <main>
        <div>
          <div className=" p-2 ">
            <div className="container ">
              <h1 className="text-4xl ">
              <h1 className="text-4xl ">{page.home.title}</h1>
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Home;
