import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plane, Menu, X } from 'lucide-react';
interface NavbarProps {
  onBookNow?: () => void;
  showBooking?: boolean;
}
const Navbar = ({
  onBookNow,
  showBooking = true
}: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'Features',
    href: '#features'
  }, {
    label: 'How It Works',
    href: '#how-it-works'
  }, {
    label: 'Pricing',
    href: '#pricing'
  }];
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };
  return <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Plane className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">AeroBook</span>
              <span className="text-xs text-muted-foreground leading-tight">Bengaluru</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                {item.label}
              </button>)}
          </div>

          {/* Desktop CTA */}
          {showBooking && <div className="hidden md:block">
              <Button onClick={onBookNow} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Book Now
              </Button>
            </div>}

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted">
            {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">
                {item.label}
              </button>)}
            {showBooking && <Button onClick={onBookNow} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Book Now
              </Button>}
          </div>
        </div>}
    </nav>;
};
export default Navbar;