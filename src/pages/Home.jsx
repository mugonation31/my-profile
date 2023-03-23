import React from "react";
import Container from "../components/container/Container";

const profiles = [
  {
    name: "Jenny Wilson",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    position: "Senior Engineer",
    admin: "Admin",
  },

  {
    name: "Jill Scott",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    position: "Accountant",
    admin: "Admin",
  },
];

export default function Home() {
  return (
    <div>
      {profiles.map((profile) => (
        <Container
          name={profile.name}
          image={profile.image}
          position={profile.position}
          admin={profile.admin}
        />
      ))}

      <p>{profiles[0].name}</p>
    </div>
  );
}
