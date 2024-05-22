
import TypeTextAnimation from "./_components/motions/typeText";

export default function Home() {

  const txt = [
    {
      msg: "Hello World!!"
    },
    {
      msg: "Please Enter Here",
      isLink: true,
      href: '/home'
    },
  ]


  return (
    <main className="flex items-center justify-center h-screen w-full">
      <TypeTextAnimation txt={txt}></TypeTextAnimation>
    </main>
    
    
  );
}
