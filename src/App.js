import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/Card/ProfileCard";
import { Users } from "./User";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  // console.log("query: "+query)
  // let queryHandle = query.split(' ');
  // console.log("queryHandle: "+queryHandle);
  // Users.filter((user) => {
  //  console.log(user.type.filter((e) => queryHandle.forEach(x => x.includes(e))))
  // })

  const LoadProfileData = Users.filter((user) => {
    let userTypeValue = () => {
      if (
        user.type.filter((e) => e.toLowerCase().includes(query.toLowerCase()))
          .length === 0
      ) {
        // if (user.type.filter((e) => queryHandle.forEach(x => e.includes(x))).length === 0) {
        return false;
      } else {
        return true;
      }
    };
    return (
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.location.toLowerCase().includes(query.toLowerCase()) ||
      userTypeValue()
    );
  }).map((user) => (
    <ul className="p-4" key={user.id}>
      <ProfileCard
        ids={user.id}
        name={user.name}
        image={user.image}
        rating={user.rating}
        location={user.location}
        type={user.type}
      />
    </ul>
  ));

  return (
    <div className="container m-auto">
      <NavBar searchBarQuery={setQuery} />
      <div className="container flex-wrap flex mt-4 justify-evenly m-auto overflow-hidden">
        {LoadProfileData}
      </div>
    </div>
  );
}

export default App;
