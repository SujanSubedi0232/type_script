import { JSX } from "react";
import ProfileCard from "./components/profileCard";

export default function Home(): JSX.Element {
  return (
    <main style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "40px"
    }}>
      <ProfileCard
        name="Sujan Subedi"
        age={22}
        role="IT Student & Frontend Developer"
        education="Bachelor in Information Technology"
        address="Pokhara, Nepal 🇳🇵"
        skills={[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "Node.js"
        ]}
      />
    </main>
  );
}
