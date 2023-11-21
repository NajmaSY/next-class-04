type petParam = { params: { pets: string } };

export default function Page({ params }: petParam) {
  return (
    <div>
      <h2>This is my dynamic route parameters: {params.pets}</h2>
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
