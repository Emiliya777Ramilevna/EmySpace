export const ColorsPage = () => {
  return (
    <div className="p-8 space-y-4">
      <div className="bg-background text-foreground p-4 rounded">
        Background / Foreground
      </div>

      <div className="bg-card text-card-foreground p-4 rounded border">
        Card
      </div>

      <div className="bg-primary text-primary-foreground p-4 rounded">
        Primary
      </div>

      <div className="bg-secondary text-secondary-foreground p-4 rounded">
        Secondary
      </div>

      <div className="bg-accent text-accent-foreground p-4 rounded">
        Accent
      </div>

      <div className="bg-mint text-mint-foreground p-4 rounded">
        Mint
      </div>

      <div className="bg-gold text-gold-foreground p-4 rounded">
        Gold
      </div>
    </div>
  );
};