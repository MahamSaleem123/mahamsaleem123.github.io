:root{
  --bg:#0f1724;
  --card:#0b1220;
  --muted:#9aa6b2;
  --accent:#3b82f6;
  --glass: rgba(255,255,255,0.04);
  --max-width:980px;
  --radius:14px;
  color-scheme: dark;
}

/* Basic layout */
*{box-sizing:border-box}
body{
  margin:0;
  font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background: linear-gradient(180deg,#071021 0%, #071621 100%);
  color:#e6eef6;
  line-height:1.45;
  padding:24px;
  display:flex;
  justify-content:center;
}
.wrap{
  width:100%;
  max-width:var(--max-width);
  display:grid;
  grid-template-columns: 320px 1fr;
  gap:24px;
  align-items:start;
}

/* Profile sidebar */
.profile{
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius:var(--radius);
  padding:20px;
  box-shadow: 0 8px 30px rgba(2,6,23,0.6);
  border: 1px solid rgba(255,255,255,0.03);
}
.avatar{
  display:flex;align-items:center;gap:16px;
}
.avatar img{
  width:84px;height:84px;border-radius:12px;object-fit:cover;border:2px solid rgba(255,255,255,0.04);
}
h1{font-size:1.25rem;margin:0 0 4px}
p.role{margin:0;color:var(--muted);font-size:0.94rem}
.meta{margin-top:16px;font-size:0.92rem;color:var(--muted)}
.links{display:flex;flex-direction:column;gap:8px;margin-top:16px}
.button{
  display:inline-block;padding:10px 12px;border-radius:10px;text-decoration:none;
  background:linear-gradient(90deg,var(--accent),#60a5fa);
  color:#021127;font-weight:600;font-size:0.95rem;text-align:center;
  box-shadow: 0 6px 18px rgba(58,96,148,0.18);
}
.mutebtn{
  background:transparent;color:var(--muted);border:1px solid rgba(255,255,255,0.03);
  padding:8px 10px;border-radius:9px;text-decoration:none;display:inline-block;
}

/* Content */
.content{
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius:var(--radius);
  padding:22px;
  box-shadow: 0 8px 30px rgba(2,6,23,0.6);
  border: 1px solid rgba(255,255,255,0.03);
}
.section{margin-bottom:20px}
.section h2{margin:0 0 12px;font-size:1.05rem}
.about-text{color:var(--muted)}
.skills{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.skill{background:var(--glass);padding:6px 8px;border-radius:8px;font-size:0.86rem;color:var(--muted)}

/* Projects */
.projects-grid{
  display:grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap:12px;
}
.card{
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius:12px;padding:14px;border:1px solid rgba(255,255,255,0.03);
  min-height:110px;display:flex;flex-direction:column;justify-content:space-between;
}
.card h3{margin:0;font-size:0.98rem}
.card p{margin:8px 0 0;color:var(--muted);font-size:0.9rem}
.card .links{margin-top:10px;display:flex;gap:8px}
.smallbtn{
  font-size:0.85rem;padding:8px 10px;border-radius:8px;text-decoration:none;
  background:rgba(255,255,255,0.03);color:var(--muted);
  border:1px solid rgba(255,255,255,0.02);
}

/* Footer */
footer{margin-top:12px;color:var(--muted);font-size:0.9rem;text-align:center}

/* Responsive */
@media (max-width:880px){
  .wrap{grid-template-columns:1fr}
  .projects-grid{grid-template-columns:1fr}
  .profile{order:2}
  .content{order:1}
}

