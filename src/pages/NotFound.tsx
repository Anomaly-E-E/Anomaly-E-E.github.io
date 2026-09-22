const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background grid-bg px-6">
      <div className="text-center">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">This page doesn't exist or was moved.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all text-sm"
        >
          Back to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
