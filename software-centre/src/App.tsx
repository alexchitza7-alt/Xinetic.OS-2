import { useState } from "react";
import {
  Search,
  Gamepad2,
  Globe,
  Briefcase,
  Palette,
  Wrench,
  Download,
  Monitor,
  Sparkles,
} from "lucide-react";

const apps = [
  { name: "Firefox", category: "Internet", description: "Browse the web.", icon: Globe },
  { name: "Steam", category: "Games", description: "Explore PC gaming.", icon: Gamepad2 },
  { name: "Visual Studio Code", category: "Development", description: "Write and edit code.", icon: Monitor },
  { name: "GIMP", category: "Graphics", description: "Edit images and artwork.", icon: Palette },
  { name: "LibreOffice", category: "Office", description: "Create documents and spreadsheets.", icon: Briefcase },
  { name: "System Monitor", category: "Utilities", description: "View system activity.", icon: Wrench },
];

const categories = ["All", "Internet", "Games", "Development", "Graphics", "Office", "Utilities"];

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredApps = apps.filter((app) => {
    const matchesSearch = app.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || app.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><Sparkles size={24} /></div>
          <div>
            <h2>XINETIC</h2>
            <span>SOFTWARE CENTRE</span>
          </div>
        </div>

        <p className="side-label">LIBRARY</p>
        <button className="nav-item active"><Monitor size={18} /> Discover</button>
        <button className="nav-item"><Download size={18} /> Installed</button>

        <div className="sidebar-footer">
          <span className="status-dot" />
          Xinetic.OS 2.0
          <small>Experimental</small>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <span>APPLICATION CENTRE / DISCOVER</span>
          <div className="version">V2.0 EXPERIMENTAL</div>
        </header>

        <section className="welcome">
          <span className="eyebrow"><Sparkles size={14} /> YOUR APPLICATION HUB</span>
          <h1>Discover something<br /><span>extraordinary.</span></h1>
          <p>Explore applications for your Xinetic experience.</p>

          <div className="search-box">
            <Search size={20} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search applications..."
            />
            <kbd>SEARCH</kbd>
          </div>
        </section>

        <section className="library">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE THE LIBRARY</span>
              <h2>Applications</h2>
            </div>
            <span className="app-count">{filteredApps.length} APPLICATIONS</span>
          </div>

          <div className="categories">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "category active-category" : "category"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="app-grid">
            {filteredApps.map((app) => {
              const Icon = app.icon;
              return (
                <article className="app-card" key={app.name}>
                  <div className="app-card-top">
                    <div className="app-icon"><Icon size={25} /></div>
                    <span className="app-category">{app.category}</span>
                  </div>
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                  <button className="install-button" disabled>
                    <Download size={15} /> Coming soon
                  </button>
                </article>
              );
            })}
          </div>

          {filteredApps.length === 0 && (
            <div className="empty-state">No applications found. Try another search.</div>
          )}
        </section>

        <footer> XINETIC.OS 2.0 <span>BEYOND THE DESKTOP.</span> </footer>
      </main>
    </div>
  );
}
