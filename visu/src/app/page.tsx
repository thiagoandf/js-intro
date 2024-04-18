import { parse } from "acorn";

const code = `const x = 10;`;
const ast = parse(code, { ecmaVersion: 2020 });

export default async function Home() {
  console.log(ast);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"></main>
  );
}
