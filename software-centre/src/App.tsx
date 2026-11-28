
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
  CheckCircle2,
  Trash2,
} from "lucide-react";

const apps = [
  { name: "Firefox", category: "Internet", description: "Browse the web.", icon: Globe },
  { name: "Steam", category: "Games", description: "Explore PC gaming.", icon: Gamepad2 },
  { name: "Visual Studio Code", category: "Development", description: "Write and edit code.", icon: Monitor },
  { name: "GIMP", category: "Graphics", description: "Edit images and artwork.", icon: Palette },
  { name: "LibreOffice", category: "Office", description: "Create documents and spreadsheets.", icon: Briefcase },
  { name: "System Monitor", category: "Utilities", description: "View system activity.", icon: Wrench },
];

const categories = [
  "All",
  "Internet",
  "Games",
  "Development",
  "Graphics",
  "Office",
  "Utilities",
];

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState("Discover");
  const [installedApps, setInstalledApps] = useState<string[]>([]);

  const visibleApps = apps.filter((app) => {
    const matchesSearch = app.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      page === "Installed" ||
      category === "All" ||
      app.category === category;
    const matchesPage =
      page === "Discover" || installedApps.includes(app.name);

    return matchesSearch && matchesCategory && matchesPage;
  });

  function addApp(name: string) {
    setInstalledApps((current) =>
      current.includes(name) ? current : [...current, name]
    );
  }

  function removeApp(name: string) {
    setInstalledApps((current) =>
      current.filter((app) => app !== name)
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <Sparkles size={24} />
          </div>
          <div>
            <h2>XINETIC</h2>
            <span>SOFTWARE CENTRE</span>
          </div>
        </div>

        <p className="side-label">LIBRARY</p>

        <button
          className={page === "Discover" ? "nav-item active" : "nav-item"}
          onClick={() => {
            setPage("Discover");
            setSearch("");
            setCategory("All");
          }}
        >
          <Monitor size={18} /> Discover
        </button>

        <button
          className={page === "Installed" ? "nav-item active" : "nav-item"}
          onClick={() => {
            setPage("Installed");
            setSearch("");
            setCategory("All");
          }}
        >
          <Download size={18} /> Installed
        </button>

        <div className="sidebar-footer">
          <span className="status-dot" />
          Xinetic.OS 2.0
          <small>Experimental</small>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <span>APPLICATION CENTRE / {page.toUpperCase()}</span>
          <div className="version">V2.0 EXPERIMENTAL</div>
        </header>

        <section className="welcome">
          <span className="eyebrow">
            <Sparkles size={14} /> YOUR APPLICATION HUB
          </span>

          <h1>
            {page === "Discover" ? (
              <>
                Discover something
                <br />
                <span>extraordinary.</span>
              </>
            ) : (
              <>
                Your applications.
                <br />
                <span>Ready when you are.</span>
              </>
            )}
          </h1>

          <p>
            {page === "Discover"
              ? "Explore applications for your Xinetic experience."
              : "Manage your saved applications."}
          </p>

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
              <span className="eyebrow">
                {page === "Discover" ? "EXPLORE THE LIBRARY" : "YOUR LIBRARY"}
              </span>
              <h2>{page === "Discover" ? "Applications" : "Installed Apps"}</h2>
            </div>

            <span className="app-count">
              {page === "Discover"
                ? `${visibleApps.length} APPLICATIONS`
                : `${installedApps.length} SAVED`}
            </span>
          </div>

          {page === "Discover" && (
            <div className="categories">
              {categories.map((item) => (
                <button
                  key={item}
                  className={
                    category === item
                      ? "category active-category"
                      : "category"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          <div className="app-grid">
            {visibleApps.map((app) => {
              const Icon = app.icon;
              const isInstalled = installedApps.includes(app.name);

              return (
                <article className="app-card" key={app.name}>
                  <div className="app-card-top">
                    <div className="app-icon">
                      <Icon size={25} />
                    </div>
                    <span className="app-category">{app.category}</span>
                  </div>

                  <h3>{app.name}</h3>
                  <p>{app.description}</p>

                  {page === "Discover" ? (
                    <button
                      className="install-button"
                      onClick={() => addApp(app.name)}
                      disabled={isInstalled}
                    >
                      {isInstalled ? (
                        <>
                          <CheckCircle2 size={15} /> Added
                        </>
                      ) : (
                        <>
                          <Download size={15} /> Add to library
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      className="install-button"
                      onClick={() => removeApp(app.name)}
                    >
                      <Trash2 size={15} /> Remove
                    </button>
                  )}
                </article>
              );
            })}
          </div>

          {visibleApps.length === 0 && (
            <div className="empty-state">
              {page === "Installed" && installedApps.length === 0
                ? "No applications added yet. Visit Discover to add some."
                : "No applications found. Try another search."}
            </div>
          )}
        </section>

        <footer>
          XINETIC.OS 2.0 <span>BEYOND THE DESKTOP.</span>
        </footer>
      </main>
    </div>
  );
}
