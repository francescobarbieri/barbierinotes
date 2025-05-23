interface Props {
  title?: string;
}

export default function Header({ title = "Barbieri Notes"}) {
  return (
    <header className="pt-12 mb-8 flex flex-col items-start">
      {title == "Barbieri Notes" ? (
        <a className="inline-block font-medium no-underline" href="/">Barbieri Notes</a>
      ) : (
        <h1 className="inline-block font-medium">{title}</h1>
      )}
      <a className="flex text-gray-400 no-underline" href="/">Francesco Barbieri</a>
    </header>
  );
}
