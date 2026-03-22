export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>My SNS</h1>
      {children}
    </div>
  );
}
