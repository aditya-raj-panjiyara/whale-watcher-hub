
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Fish } from 'lucide-react';

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Fish className="h-8 w-8 text-ocean-500" />
            <span className="text-xl font-semibold tracking-tight">Team GECR</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#">Dashboard</NavLink>
            <NavLink href="#">Historical Data</NavLink>
            <NavLink href="#">Methodology</NavLink>
            <NavLink href="#">About</NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out',
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</MobileNavLink>
          <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Historical Data</MobileNavLink>
          <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Methodology</MobileNavLink>
          <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
        </nav>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => (
  <a 
    href={href}
    className={cn(
      'relative font-medium text-gray-700 transition-colors hover:text-ocean-500',
      'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-ocean-500',
      'after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300',
      className
    )}
  >
    {children}
  </a>
);

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => (
  <a 
    href={href}
    onClick={onClick}
    className="block py-2 px-4 font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
  >
    {children}
  </a>
);

export default NavBar;
