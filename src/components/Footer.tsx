import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold text-primary-foreground mb-4">zomato</h2>
            <p className="text-sm mb-4">
              Better food for more people
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About Zomato */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">About Zomato</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Who We Are</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Work With Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Report Fraud</a></li>
            </ul>
          </div>

          {/* For Restaurants */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">For Restaurants</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Apps For You</a></li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Social Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2024 Zomato Clone. Built with ❤️</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
