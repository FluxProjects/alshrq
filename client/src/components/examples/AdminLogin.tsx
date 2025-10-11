import AdminLogin from '../AdminLogin';

export default function AdminLoginExample() {
  const handleLogin = (username: string, password: string) => {
    console.log('Login submitted:', username, password);
  };

  return (
    <div className="bg-background">
      <AdminLogin onLogin={handleLogin} />
    </div>
  );
}
