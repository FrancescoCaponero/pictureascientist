import './SiteLayout.scss'

interface LayoutProps {
  children: React.ReactNode;
}

import Footer from '../components/Footer';
import Header from '../components/Header';

const WebsiteLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="main-content-wrapper">
      <div className="content-container">
        <Header />
          {children}
        <Footer />
      </div>
    </div>
  );
};

export default WebsiteLayout;
