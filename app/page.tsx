import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Hello Next Js</h2>
      <Button>Search</Button>
      <UserButton />
    </div>
  );
}
