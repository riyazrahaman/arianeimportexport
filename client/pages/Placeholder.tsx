interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-muted to-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
          {title}
        </h1>
        <p className="text-muted-foreground mb-8">
          This page is coming soon. Continue exploring or check back later for
          more information about our shipping and logistics services.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
