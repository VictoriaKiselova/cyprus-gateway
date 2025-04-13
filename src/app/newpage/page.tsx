import Link from "next/link";
const NewPage = () => {
  return (
    <div>
      <p>NewPage</p>
      
      <Link href="/newpage/second-page">Перейти на страницу second-page</Link>
    </div>
  );
};

export default NewPage;
