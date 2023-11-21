import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animals Blog",
  description: "A list of animals on my animals route.",
};

type petsSearchQuery = {
  sortBy: string;
};

type petsType = {
  name: string;
  id: number;
};

let pets: petsType[] = [
  {
    name: "Darcy",
    id: 0,
  },
  {
    name: "Buddy",
    id: 1,
  },
  {
    name: "Zelda",
    id: 2,
  },
  {
    name: "Tess",
    id: 3,
  },
  {
    name: "Nanuk",
    id: 4,
  },
  {
    name: "Rover",
    id: 5,
  },
];

function comparePets(a: petsType, b: petsType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function Page({
  searchParams,
}: {
  searchParams: petsSearchQuery;
}) {
  let sortedPets = [...pets];
  if (searchParams.sortBy == "asc") {
    sortedPets.sort(comparePets);
  } else if (searchParams.sortBy == "desc") {
    sortedPets.sort(comparePets).reverse();
  }

  return (
    <div>
      <h4>This is a website about animals</h4>
      <p>{searchParams.sortBy}</p>
      <br />
      <Link href="/animals">Remove the sort</Link>
      <br />
      <Link href="/animals?sortBy=asc">Sort by ascending</Link>
      <br />
      <Link href="/animals?sortBy=desc">Sort by descending</Link>
      <br />
      <br />
      <br />
      {sortedPets.map((pet) => {
        return (
          <div key={pet.id}>
            <br />
            <Link href={`/animals/${pet.name.toLowerCase()}`}>{pet.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
