const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8 mt-8">
      <div>
        <p className="text-center text-sm text-gray-500 py-4">
          &copy; {new Date().getFullYear()} PCG Liberty Congregation. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
