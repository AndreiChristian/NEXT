import User from "../../components/user/user";

const UsersList = ({ users }) => {
  console.log(users);
  return (
    <>
      <h1>Users</h1>

      <ul>
        {users.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </ul>
    </>
  );
};

export default UsersList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  console.log(data);

  return { props: { users: data } };
}
