const User = ({ user }) => {
  return (
    <li>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
    </li>
  );
};

export default User;
