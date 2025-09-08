export function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200 dark:border-gray-800 py-1 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} it Clone. All rights reserved.
      </div>
    </footer>
  );
}
