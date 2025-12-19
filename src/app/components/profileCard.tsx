import { JSX } from "react";

type ProfileProps = {
  name: string;
  age: number;
  role: string;
  education: string;
  skills: string[];
  address: string;
};

export default function ProfileCard({
  name,
  age,
  role,
  education,
  skills,
  address,
}: ProfileProps): JSX.Element {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "10px",
      width: "350px"
    }}>
      <h2>👤 Personal Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Education:</strong> {education}</p>
      <p><strong>Address:</strong> {address}</p>

      <h3>🛠 Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
