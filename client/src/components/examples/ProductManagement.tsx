import ProductManagement from '../ProductManagement';

export default function ProductManagementExample() {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className="bg-background">
      <ProductManagement onLogout={handleLogout} />
    </div>
  );
}
