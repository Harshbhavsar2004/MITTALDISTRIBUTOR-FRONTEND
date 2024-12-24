const Navbar = ({ user }) => {
  return (
    <nav>
      ...
      {!user && (
        <button onClick={() => navigate('/login')}>Login</button>
      )}
      {user && (
        <button onClick={() => {
          localStorage.removeItem('token');
          window.location.reload(); // Or use a more sophisticated method to log out
        }}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar; 