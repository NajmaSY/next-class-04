import Link from "next/link";

type petParam = { params: { pets: string } };

export function generateMetadata({ params }: petParam) {
  const modTitle = params.pets[0].toUpperCase() + params.pets.slice(1);
  return {
    title: `Najma's Pets - ${modTitle}`,
    description: `Najma's Pets - fun facts about ${params.pets}`,
  };
}

export default function Page({ params }: petParam) {
  return (
    <div>
      <h2>This is my dynamic route parameters: {params.pets}</h2>
      <Link href="/animals">{`<-- Go back`}</Link>
    </div>
  );
}

// export default function HeaderComponent({ cats }) {
//   return cats;
// }

// FunkyNextObject = {
//   params: {
//     pets: "whatever we type in the url",
//   },
// };
