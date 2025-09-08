export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-1 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} it Clone. All rights reserved.
      </div>
    </footer>
  );
}
