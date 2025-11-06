type LogoVariant = "primary" | "secondary_light" | "secondary_dark";

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
};

const logoSources: Record<LogoVariant, string> = {
  primary: "/logo_primary.png",
  secondary_light: "/logo_secondary_light.png",
  secondary_dark: "/logo_secondary_dark.png",
};

export const Logo = ({ variant = "primary", className }: LogoProps) => {
  const src = logoSources[variant];
  return <img src={src} alt="Zli ロゴ" className={className} />;
};
