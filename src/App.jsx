import React, { useMemo, useState } from "react";

const departments = [
  { id: "money", icon: "💰", name: "Money & Earning", desc: "कमाई और ऑनलाइन बिजनेस के रास्ते" },
  { id: "trading", icon: "📈", name: "Trading Academy", desc: "ट्रेडिंग सीखना और अभ्यास करना" },
  { id: "creator", icon: "🎬", name: "Creator Studio", desc: "YouTube, Reels और सोशल मीडिया" },
  { id: "video", icon: "🎥", name: "AI Video Creation", desc: "आइडिया से वीडियो एक्सपोर्ट तक" },
  { id: "business", icon: "🏢", name: "Business Builder", desc: "बिजनेस की योजना और विकास" },
  { id: "marketing", icon: "📣", name: "Digital Marketing", desc: "SEO, विज्ञापन और मार्केटिंग" },
  { id: "network", icon: "🤝", name: "Network Marketing", desc: "टीम और नैतिक मार्केटिंग" },
  { id: "learning", icon: "🎓", name: "Learning Academy", desc: "नई स्किल और व्यक्तिगत शिक्षा" },
  { id: "creative", icon: "🎨", name: "Creative Studio", desc: "डिजाइन और क्रिएटिव काम" },
  { id: "assistant", icon: "🧠", name: "Personal AI Assistant", desc: "लक्ष्य, काम और समय का प्रबंधन" },
  { id: "research", icon: "🔎", name: "Research & Intelligence", desc: "रिसर्च और बाजार की जानकारी" },
  { id: "apps", icon: "💻", name: "App & Website Studio", desc: "ऐप और वेबसाइट बनाने में सहायता" },
  { id: "sales", icon: "🛍️", name: "Customer & Sales", desc: "ग्राहक और बिक्री प्रबंधन" },
  { id: "rewards", icon: "🎁", name: "Referral & Rewards", desc: "रेफरल और रिवॉर्ड सिस्टम" },
  { id: "subscriptions", icon: "⭐", name: "Plans & Subscriptions", desc: "भविष्य के सदस्यता प्लान" }
];

export default function App() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredDepartments = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return departments;

    return departments.filter((department) =>
      `${department.name} ${department.desc}`.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-icon">✦</span>
          <span>GLOBAL AI <strong>SUPER HUB</strong></span>
        </a>
        <span className="status-label">EARLY DEVELOPMENT</span>
      </header>

      <section className="hero" id="home">
        <div className="hero-badge">✦ YOUR ALL-IN-ONE AI WORKSPACE</div>
        <h1>
          One Platform.
          <span> Every Goal.</span>
        </h1>
        <p>
          अपने लक्ष्य बताइए और सही दिशा में आगे बढ़ने के लिए
          AI टूल्स और विशेषज्ञ सहायता खोजिए।
        </p>

        <div className="search-box">
          <span>⌕</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="आप क्या करना चाहते हैं? कोई विभाग खोजें..."
            aria-label="विभाग खोजें"
          />
        </div>
      </section>

      <section className="department-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE THE PLATFORM</span>
            <h2>आपके AI विभाग</h2>
            <p>अपनी ज़रूरत के अनुसार एक विभाग चुनें।</p>
          </div>
          <span className="department-count">
            {filteredDepartments.length} विभाग
          </span>
        </div>

        <div className="department-grid">
          {filteredDepartments.map((department) => (
            <button
              className={`department-card ${
                selected === department.id ? "selected" : ""
              }`}
              key={department.id}
              onClick={() => setSelected(department.id)}
              type="button"
            >
              <span className="department-icon">{department.icon}</span>
              <strong>{department.name}</strong>
              <span className="department-description">
                {department.desc}
              </span>
              <span className="card-action">विभाग चुनें →</span>
            </button>
          ))}
        </div>

        {filteredDepartments.length === 0 && (
          <p className="empty-state">इस नाम का कोई विभाग नहीं मिला।</p>
        )}

        {selected && (
          <div className="selection-message" role="status">
            <strong>
              {departments.find((item) => item.id === selected)?.name}
            </strong>
            <p>
              यह विभाग अभी शुरुआती विकास में है। इसके टूल्स अगले चरणों में
              बनाए और जाँचे जाएँगे।
            </p>
            <button type="button" onClick={() => setSelected(null)}>
              बंद करें
            </button>
          </div>
        )}
      </section>

      <footer className="footer">
        <strong>GLOBAL AI SUPER HUB</strong>
        <p>One Platform. Every Goal.</p>
        <span>अभी विकास जारी है — सभी सुविधाएँ अभी उपलब्ध नहीं हैं।</span>
      </footer>
    </main>
  );
}
