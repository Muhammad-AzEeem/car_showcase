import { CarCard, CustomFilter, Hero, ShowMore } from "@/components";
import SearhBar from "@/components/SearhBar";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }: any) {
  // == step 15
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturers || "", // step 27 to pass all props in fetch cars
    model: searchParams.model || "",
    fuel: searchParams.fuel || "",
    year: searchParams.manufacturers || 2022,
    limit: searchParams.limit || 10,
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      {/* step 1 */}
      <Hero />

      {/* step 10 */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore the cars you might like</p>
        </div>

        {/* Search bar */}
        <div className="home__filters">
          <SearhBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {/* == step 16 */}
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {/* == step 33 */}
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, No Result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

// == step 2 in hero page
// == step 11 in Searchbar component
// == step 17 in CarCard component
// == step 28 in CustomFilter
// == step 34 in ShowMore
